import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import firebaseApp from "@/firebase/clientApp";
import { ModalContext } from "../ModalProvider/ModalProvider";

export default function ProfileMenu() {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(null);

  const { isUserProfileModalOpen, setIsUserProfileModalOpen } =
    useContext(ModalContext);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsUserProfileModalOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Error logging out user", error);
    }
  };

  useEffect(() => {
    // Subscribe to Firebase authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "102%", md: "100%" },
        position: "absolute",
        display: isUserProfileModalOpen ? "flex" : "none",
        justifyContent: "flex-end",
        top: "10vh",
        right: "10vh",
      }}
    >
      <Box
        sx={{
          height: { xs: "", md: "auto" },
          width: { xs: "", md: "250px" },
          borderRadius: "10px",
          background: "#FFFFFF",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            padding: "1.5em",
            display: "flex",
            flexDirection: "column",
            gap: "1.5em",
          }}
        >
          <Box sx={{ display: "flex", gap: "1em", cursor: "pointer" }}>
            <AccountCircleIcon sx={{ color: "#474646" }} />
            <Typography sx={{ color: "#474646" }}>Profile</Typography>
          </Box>
          <Box
            onClick={handleLogout}
            sx={{ display: "flex", gap: "1em", cursor: "pointer" }}
          >
            <LogoutIcon sx={{ color: "#474646" }} />
            <Typography sx={{ color: "#474646" }}>Logout</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
