import React from "react";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Pane from "../Pane/Pane";
import { useRouter } from "next/router";
import UserInfo from "./UserInfo";
import { toast } from "react-hot-toast";

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
        toast.error("Something went wrong");
        console.error("Error logging out user", error);
      }
    } else {
      router.push("/register");
    }
  };

  const handleSubscriptionRoute = () => {
    if (user) {
      if (!user?.subscribed) {
        router.push("/subscription");
        setShowHamburg(false);
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
        overflow: "hidden",
        top: "-30px",
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
            top: "30px",
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
            marginLeft: ".25em",
          }}
        >
          {user ? (
            <Box>
              <UserInfo user={user} />
            </Box>
          ) : (
            <Box sx={{ margin: "1em 20px" }}>
              <Typography sx={{ fontSize: "1.1rem", textAlign: "center" }}>
                Please login to view more content
              </Typography>
            </Box>
          )}
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
              borderRadius: "10px",
              boxShadow: "20px 20px 60px #bebebe -20px -20px 60px #ffffff",
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 20px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                transform: "scale(1.05)",
              },
              transition: "boxShadow 150ms ease-in, transform 150ms ease-in",
            }}
          >
            <Typography>{user ? "Logout" : "Login"}</Typography>
          </Box>
          <Box
            onClick={handleSubscriptionRoute}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              margin: "2em 0",
              padding: ".5em 1.5em",
              background:
                user?.subscribed === "true" ? "whitesmoke" : "#1e1e1e",
              border: user?.subscribed === "true" ? "2px solid #b0aeae" : "",
              boxShadow: "20px 20px 60px #bebebe -20px -20px 60px #ffffff",
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 20px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                transform: "scale(1.05)",
              },
              transition: "boxShadow 150ms ease-in, transform 150ms ease-in",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{ color: user?.subscribed === "true" ? "#1e1e1e" : "white" }}
            >
              {user?.subscribed === "true" ? "Subscribed" : "Subscribe"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
