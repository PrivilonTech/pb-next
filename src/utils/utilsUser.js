import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { toast } from "react-hot-toast";

import firebaseApp from "@/firebase/clientApp";

export const createNewUser = async (userData) => {
  try {
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "users");

    // Set the document data to the user's display name and email address
    addDoc(userCollectionRef, userData)
      .then(() => {
        console.log("New user created successfully!");
      })
      .catch((error) => {
        console.log("Error creating user document", error);
      });
  } catch (error) {
    console.error(error);
  }
};

export const updateUserInfoByEmail = async (
  email,
  additionalData,
  setLoading
) => {
  try {
    setLoading(true);
    const firebaseDatabase = getFirestore(firebaseApp);
    const colRef = collection(firebaseDatabase, "users");

    const queries = query(colRef, where("email", "==", email));
    const querySnapshot = await getDocs(queries);

    if (querySnapshot.empty) {
      console.log("No matching documents found");
    }

    querySnapshot.forEach((doc) => {
      const docRef = doc.ref;
      const updatedData = { ...doc.data(), ...additionalData };

      updateDoc(docRef, updatedData)
        .then(() => {
          console.log("User document updated successfully!");
        })
        .catch((error) => {
          console.log("Error updating user document", error);
        });
    });

    setLoading(false);
  } catch (error) {
    toast("Something went wrong");
    console.log(error);

    setLoading(false);
  }
};

export const updateUserInfoByPhone = async (
  phone,
  additionalData,
  setLoading
) => {
  try {
    setLoading(true);
    const firebaseDatabase = getFirestore(firebaseApp);
    const colRef = collection(firebaseDatabase, "users");

    const queries = query(colRef, where("phone", "==", phone));
    const querySnapshot = await getDocs(queries);

    if (querySnapshot.empty) {
      console.log("No matching documents found");
    }

    querySnapshot.forEach((doc) => {
      const docRef = doc.ref;
      const updatedData = { ...doc.data(), ...additionalData };

      updateDoc(docRef, updatedData)
        .then(() => {
          console.log("User document updated successfully!");
        })
        .catch((error) => {
          console.log("Error updating user document", error);
        });
    });

    setLoading(false);
  } catch (error) {
    toast("Something went wrong");
    console.log(error);

    setLoading(false);
  }
};

export const getAllUsers = async () => {
  const firebaseDatabase = getFirestore(firebaseApp);
  const colRef = collection(firebaseDatabase, "users");
  const snapshots = await getDocs(colRef);

  const docs = snapshots.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;
    return data;
  });

  return docs;
};

export const getUserByEmail = async (email) => {
  if (!email) {
    return;
  }

  const firebaseDatabase = getFirestore(firebaseApp);
  const colRef = collection(firebaseDatabase, "users");

  const queries = query(colRef, where("email", "==", email));
  const querySnapshot = await getDocs(queries);

  if (querySnapshot.size > 0) {
    return querySnapshot.docs[0].data();
  } else {
    return null;
  }
};

export const getUserByPhone = async (phone) => {
  if (!phone) {
    return;
  }

  const firebaseDatabase = getFirestore(firebaseApp);
  const colRef = collection(firebaseDatabase, "users");

  const queries = query(colRef, where("phone", "==", phone));
  const querySnapshot = await getDocs(queries);

  if (querySnapshot.size > 0) {
    return querySnapshot.docs[0].data();
  } else {
    return null;
  }
};

export const getUserByUID = async (uid) => {
  if (!uid) {
    return;
  }

  const firebaseDatabase = getFirestore(firebaseApp);
  const colRef = collection(firebaseDatabase, "users");

  const queries = query(colRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(queries);

  if (querySnapshot.size > 0) {
    return querySnapshot.docs[0].data();
  } else {
    return null;
  }
};

export const isAdminCheck = (userLoggedIn) => {
  if (!userLoggedIn) {
    return null;
  }

  if (userLoggedIn.role === "admin") {
    return true;
  }

  return false;
};

export const isTrial = (user) => {
  if (!user || user.role === "admin") {
    return null;
  }

  if (user.subscribed) {
    //TODO: SUBSRIBTION END
  } else {
    // TRIAL PERIOD
    const currentDate = new Date();
    const createdAtParts = user.createdAt.split("-");
    const createdAtDate = new Date(
      `${createdAtParts[2]}-${createdAtParts[1]}-${createdAtParts[0]}`
    );

    currentDate.setHours(0, 0, 0, 0);
    createdAtDate.setHours(0, 0, 0, 0);

    const timeDiff = currentDate.getTime() - createdAtDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return daysDiff < 2;
  }
};

export const getCurrentDate = () => {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  return `${day}-${month}-${year}`;
};
