import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseDatabase = getFirestore();

const userFirebaseRef = collection(firebaseDatabase, "users");

const getUsers = async () => {
  try {
    const snapshot = await getDocs(userFirebaseRef);
    let users = [];
    snapshot.forEach((doc) => {
      users.push({ ...doc.data() });
    });
    return users;
  } catch (error) {
    console.log("Error fetching users", error);
  }
};

export default getUsers;
