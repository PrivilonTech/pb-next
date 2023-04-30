import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
        height: "100svh",
        width: "105vw",
        display: "flex",
        position: "absolute",
        top: "-10px",
        left: "-15px",
        background: "white",
        justifyContent: "space-around",
        zIndex: "99999",
        alignItems: "center",
        flexDirection: "column",
        transform: showHamburg ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 0.3s ease",
        borderRadius: "10px",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
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
        <KeyboardArrowUpIcon
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
            <UserInfo />
          </Box>
          <Pane />
        </Box>
      </Box>
      <Box
        onClick={handleUser}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "2em 0",
          padding: ".5em 3em",
          border: "2px solid #d5d9eb",
          boxShadow:
            " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          borderRadius: "10px",
        }}
      >
        <Typography>{user ? "Logout" : "Login"}</Typography>
      </Box>
    </Box>
  );
}
