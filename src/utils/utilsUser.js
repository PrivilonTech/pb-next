import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

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
  if (!user) {
    return null;
  }

  const currentDate = new Date(); // Current date
  const createdAtDate = new Date(user.createdAt); // User's createdAt date

  // Calculate the difference in milliseconds between the two dates
  const timeDifference = currentDate.getTime() - createdAtDate.getTime();

  const twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000; // Two days in milliseconds

  // The user was created more than 2 days ago
  if (timeDifference > twoDaysInMilliseconds) {
    return false;
  }

  return true;
};

export const getCurrentDate = () => {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  return `${day}-${month}-${year}`;
};
