import React from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  query,
  serverTimestamp,
} from "firebase/firestore";

import firebaseApp from "@/firebase/clientApp";

export default function SocialLogin({
  auth,
  showFooter,
  setIsMobilePage,
  setIsLoginPage,
}) {
  const router = useRouter();

  const googleProvider = new GoogleAuthProvider();
  const firebaseDatabase = getFirestore(firebaseApp);

  // Create a new document in the 'users' collection
  const createNewUser = async (user) => {
    try {
      const userCollectionRef = collection(firebaseDatabase, "users");

      // Set the document data to the user's display name and email address
      addDoc(userCollectionRef, {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        role: "user",
        subscribed: false,
        createdAt: serverTimestamp(),
      })
        .then(() => {
          router.push("/");
        })
        .catch((error) => {
          console.log("Error creating user document", error);
        });

      console.log("New user created successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  //google login
  const handleUserGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log(docSnap);
      // const queryRef = query(usersCollection, where("email", "==", userEmail));

      await createNewUser(user);

      // router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (!showFooter) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5em",
          alignItems: "center",
          background: "white",
          borderRadius: "8px",
          border: "2px solid #d7dbd8",
          padding: ".5em",
          cursor: "pointer",
          transition: "background-color 0.2s ease",
          "&:hover": {
            background: "#faf5f5",
          },
        }}
        onClick={handleUserGoogleLogin} //google authentication
      >
        <img src={"/googleIcon.png"} alt="google-icon" height={20} />
        <Typography>Continue with Google</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5em",
          background: "white",
          borderRadius: "8px",
          border: "2px solid #d7dbd8",
          padding: ".5em",
          cursor: "pointer",
          transition: "background-color 0.2s ease",
          "&:hover": {
            background: "#faf5f5",
          },
        }}
        onClick={() => {
          setIsMobilePage(true);
          setIsLoginPage(false);
        }}
      >
        <img src={"/phoneIcon.png"} alt="phone-icon" height={20} />
        <Typography>Continue with Mobile</Typography>
      </Box>
    </>
  );
}
