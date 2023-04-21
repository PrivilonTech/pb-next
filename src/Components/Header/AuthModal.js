import React, { useContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../../firebase/clientApp";

import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ModalContext } from "../ModalProvider/ModalProvider";

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen } = useContext(ModalContext);

  const auth = getAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = async () => {
    try {
      // Sign in with GitHub popup
      const result = await signInWithPopup(auth, googleProvider);
      // Access user data from the Google auth provider result
      const user = result.user;
      console.log("Logged in with Google:", user);
      // Redirect to home page or dashboard
      setIsAuthModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: isAuthModalOpen ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: { xs: "102%", md: "100%" },
        position: "absolute",
        top: 0,
        left: 0,
        transform: isAuthModalOpen ? "translateY(0)" : "translateY(100%)",
        opacity: isAuthModalOpen ? 1 : 0,
        transition: "transform 300ms ease-in-out, opacity 300ms ease-in-out",
      }}
    >
      <Box
        sx={{
          height: { xs: "100%", md: "auto" },
          width: { xs: "100%", md: "400px" },
          borderRadius: "50px",
          background: "#FFFFFF",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "2em",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "3em",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem" }}>
              Signin / Register
            </Typography>
            <CloseIcon
              sx={{ cursor: "pointer" }}
              onClick={() => setIsAuthModalOpen(false)}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
            <Typography>Email</Typography>
            <input
              type="text"
              placeholder="Email"
              style={{
                padding: ".75em",
                outline: "none",
                border: "2px solid #d7dbd8",
                borderRadius: "50px",
                fontSize: "1rem",
                width: "90%",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
            <Typography>Password</Typography>
            <input
              type="password"
              placeholder="Password"
              style={{
                padding: ".75em",
                outline: "none",
                border: "2px solid #d7dbd8",
                borderRadius: "50px",
                fontSize: "1rem",
                width: "90%",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".75em",
          }}
        >
          <button
            style={{
              background: "#C31815",
              boxShadow: "0px 8px 22px rgba(74, 58, 255, 0.26)",
              borderRadius: "86px",
              color: "white",
              border: "none",
              padding: ".75em .5em",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <Typography sx={{ fontWeight: 500 }}>Sign in</Typography>
          </button>
          <Typography
            sx={{ textAlign: "center", color: "#6F6C90", cursor: "pointer" }}
          >
            Forgot your password?
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#6F6C90" }}>
            or
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: "1em",
              flexDirection: "column",
            }}
          >
            {/* Google */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5em",
                alignItems: "center",
                background: "white",
                borderRadius: "20px",
                border: "2px solid #d7dbd8",
                padding: ".5em",
                cursor: "pointer",
              }}
              onClick={handleUserLogin} //google authentication
            >
              <img src={"/googleIcon.png"} alt="google-icon" height={20} />
              <Typography>Register with Google</Typography>
            </Box>
            {/* Number */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5em",
                background: "white",
                borderRadius: "20px",
                border: "2px solid #d7dbd8",
                padding: ".5em",
                cursor: "pointer",
              }}
              onClick={() => {}} //mobile authentication
            >
              <img src={"/phoneIcon.png"} alt="phone-icon" height={20} />
              <Typography>Register with Mobile</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
