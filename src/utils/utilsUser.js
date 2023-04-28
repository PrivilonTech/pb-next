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

export const getUserByRole = async (role) => {
  if (!role) {
    return;
  }

  const firebaseDatabase = getFirestore(firebaseApp);
  const colRef = collection(firebaseDatabase, "users");

  const queries = query(colRef, where("role", "==", role));
  const querySnapshot = await getDocs(queries);

  if (querySnapshot.size > 0) {
    return querySnapshot.docs[0].data();
  } else {
    return null;
  }
};

export const getUserById = async (id) => {
  const docRef = doc(firebaseDatabase, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    return data;
  } else {
    return false;
  }
};
