import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import firebaseApp from "@/firebase/clientApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function UserProfile() {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Subscribe to Firebase authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, set user state
        setUser(user);
      } else {
        // User is signed out, clear user state
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
        display: "flex",
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
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "#CA1B18",
            height: "5em",
            borderRadius: "10px 10px 0 0",
            padding: ".5em 0",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}>
            <Typography sx={{ color: "white", letterSpacing: ".05em" }}>
              {user?.displayName}
            </Typography>
            {user?.phoneNumber && (
              <Typography
                sx={{
                  color: "white",
                  fontSize: ".9rem",
                  letterSpacing: ".05em",
                }}
              >
                {user?.phoneNumber}
              </Typography>
            )}
          </Box>
          <Box>
            <img
              src={
                user?.photoURL ? user?.photoURL : "/Header/placeholderUser.png"
              }
              alt="user-image"
              style={{
                borderRadius: "50%",
                height: "50px",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ padding: "1.5em", display: "flex", gap: "1em" }}>
          <LogoutIcon sx={{ color: "#474646" }} />
          <Typography sx={{ color: "#474646" }}>Logout</Typography>
        </Box>
      </Box>
    </Box>
  );
}
