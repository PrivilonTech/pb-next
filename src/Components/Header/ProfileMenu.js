import React from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import firebaseApp from "@/firebase/clientApp";

export default function ProfileMenu({ setIsUserProfileModalOpen, targetRef }) {
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  const handleLogout = async () => {
    try {
      router.push("/");
      await auth.signOut();
      setIsUserProfileModalOpen(false);
    } catch (error) {
      console.error("Error logging out user", error);
    }
  };

  return (
    <Box
      ref={targetRef}
      sx={{
        width: { xs: "102%", md: "100%" },
        position: "absolute",
        display: "flex",
        justifyContent: "flex-end",
        top: "11vh",
        right: "50px",
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
