import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import {
  createNewUser,
  getCurrentDate,
  getUserByEmail,
} from "@/utils/utilsUser";
import { ModalContext } from "../HomePage/ModalProvider";

export default function SocialLogin({
  auth,
  showFooter,
  setIsMobilePage,
  setIsLoginPage,
}) {
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  const { setLoading } = useContext(ModalContext);

  //google login
  const handleUserGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setLoading(true);
      const existingUser = await getUserByEmail(result.user.email);

      if (!existingUser) {
        await createNewUser({
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          role: "user",
          subscribed: false,
          createdAt: getCurrentDate(),
        });
      }

      router.push("/");
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
