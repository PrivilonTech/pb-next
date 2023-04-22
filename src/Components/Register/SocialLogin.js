import React from "react";
import { Box, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

export default function SocialLogin({
  auth,
  showFooter,
  setIsMobilePage,
  setIsLoginPage,
}) {
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  //google authentication
  const handleUserGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

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
        }}
        onClick={handleUserGoogleLogin} //google authentication
      >
        <img src={"/googleIcon.png"} alt="google-icon" height={20} />
        <Typography>Continue with Google</Typography>
      </Box>
      {/* Number */}
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
