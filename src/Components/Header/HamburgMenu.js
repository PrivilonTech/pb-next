import React from "react";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Pane from "../Pane/Pane";
import { useRouter } from "next/router";
import UserInfo from "./UserInfo";

export default function HamburgMenu({
  setShowHamburg,
  showHamburg,
  user,
  auth,
}) {
  const router = useRouter();

  const handleUser = async () => {
    if (user) {
      try {
        router.push("/");
        await auth.signOut();
        setShowHamburg(false);
      } catch (error) {
        console.error("Error logging out user", error);
      }
    } else {
      router.push("/register");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        position: "absolute",
        top: "-10px",
        left: "-15px",
        background: "white",
        justifyContent: "space-around",
        zIndex: "99999",
        alignItems: "center",
        flexDirection: "column",
        transform: showHamburg ? "translateX(0)" : "translateX(-110%)",
        transition: "transform 0.3s ease",
        borderRadius: "10px",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        overflow: "hidden",
        // paddingLeft: "30px",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <ChevronLeftIcon
          sx={{
            position: "absolute",
            right: "25px",
            top: "35px",
            fontSize: 25,
            color: "gray",
          }}
          onClick={() => setShowHamburg(false)}
        />
        <Box
          sx={{
            height: "80%",
            width: "100%",
            marginTop: "4em",
          }}
        >
          <Box>
            <UserInfo user={user} />
          </Box>
          <Pane />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Box
            onClick={handleUser}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              margin: "2em 0",
              padding: ".5em 2em",
              border: "2px solid #d5d9eb",
              boxShadow:
                " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              borderRadius: "10px",
            }}
          >
            <Typography>{user ? "Logout" : "Login"}</Typography>
          </Box>
          <Box
            onClick={handleUser}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              margin: "2em 0",
              padding: ".5em 1.5em",
              background: user?.subscribed ? "#1e1e1e" : "#C31815",
              boxShadow:
                " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ color: "white" }}>
              {user?.subscribed ? "Subscribed" : "Subscribe"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
