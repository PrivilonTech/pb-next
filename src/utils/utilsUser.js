import {
  addDoc,
  collection,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import axios from "axios";

import firebaseApp from "@/firebase/clientApp";

export const createNewUser = async (userData) => {
  const db = getFirestore(firebaseApp);

  try {
    const existingUser = await getUserById(userData.uid);
    // const phoneQuery = query(userCollectionref, where("phone", "==", phone));

    if (!existingUser) {
      const userCollectionRef = collection(db, "users");

      // Set the document data to the user's display name and email address
      addDoc(userCollectionRef, userData)
        .then(() => {
          console.log("New user created successfully!");
        })
        .catch((error) => {
          console.log("Error creating user document", error);
        });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async () => {
  const response = await axios.get(
    "https://v1.nocodeapi.com/sukrit_04/fbsdk/WNyOtwxWrtyRFXeH/getAllUsers"
  );

  return response.data.users;
};

export const getUserById = async (userId) => {
  const response = await axios.get(
    `https://v1.nocodeapi.com/sukrit_04/fbsdk/WNyOtwxWrtyRFXeH/getUser?uid=${userId}`
  );

  return response.data;
};

export const getUserByEmail = async (email) => {
  const response = await axios.get(
    `https://v1.nocodeapi.com/sukrit_04/fbsdk/WNyOtwxWrtyRFXeH/getUserByEmail?email=${email}`
  );

  return response.data;
};
