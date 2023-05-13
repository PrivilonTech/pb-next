import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

import Pane from "../Pane/Pane";
import UserInfo from "./UserInfo";
import { ModalContext } from "../HomePage/ModalProvider";
import LoadingPane from "../Loading/LoadingPane";
import LoadingButton from "../Loading/LoadingButton";

export default function HamburgMenu({ setShowHamburg, showHamburg, auth }) {
  const router = useRouter();

  const hamburgRef = useRef(null);
  const { loading, fetchedUser, fetchLoader } = useContext(ModalContext);
  const [user, setUser] = useState(null);

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 50) {
      // Swipe left detected, close the menu
      setShowHamburg(false);
    }
  };

  useEffect(() => {
    //user initialization
    const user = secureLocalStorage.getItem("user");
    setUser(user);

    if (hamburgRef.current) {
      hamburgRef.current.addEventListener("touchstart", handleTouchStart);
      hamburgRef.current.addEventListener("touchmove", handleTouchMove);
      hamburgRef.current.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (hamburgRef.current) {
        hamburgRef.current.removeEventListener("touchstart", handleTouchStart);
        hamburgRef.current.removeEventListener("touchmove", handleTouchMove);
        hamburgRef.current.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  useEffect(() => {
    const user = secureLocalStorage.getItem("user");
    setUser(user);
  }, [fetchedUser, secureLocalStorage.getItem("user")]);

  const handleUserLogout = async () => {
    if (user) {
      try {
        router.push("/");
        await auth.signOut();

        secureLocalStorage.removeItem("user");
        setUser(null);
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
    <>
      <Box
        ref={hamburgRef}
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          position: "fixed",
          overflow: "hidden",
          top: "0px",
          left: "-5px",
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
            {user || fetchLoader ? (
              <Box>
                <UserInfo user={user} loading={fetchLoader} />
              </Box>
            ) : (
              !fetchLoader && (
                <Box sx={{ margin: "1em 20px" }}>
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      textAlign: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    Please login to view more content
                  </Typography>
                </Box>
              )
            )}
            {fetchLoader ? <LoadingPane paneCount={8} /> : <Pane />}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {fetchLoader ? (
              <Box sx={{ margin: "2em 0" }}>
                <LoadingButton />
              </Box>
            ) : (
              <Box
                onClick={handleUserLogout}
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
                  transition:
                    "boxShadow 150ms ease-in, transform 150ms ease-in",
                }}
              >
                <Typography>{user ? "Logout" : "Login"}</Typography>
              </Box>
            )}
            {fetchLoader ? (
              <Box sx={{ margin: "2em 0" }}>
                <LoadingButton />
              </Box>
            ) : (
              <Box
                onClick={handleSubscriptionRoute}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2em 0",
                  padding: ".5em 1.5em",
                  background: user?.subscribed ? "gray" : "#1e1e1e",
                  boxShadow: "20px 20px 60px #bebebe -20px -20px 60px #ffffff",
                  "&:hover": {
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 20px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                    transform: "scale(1.05)",
                  },
                  transition:
                    "boxShadow 150ms ease-in, transform 150ms ease-in",
                  borderRadius: "10px",
                }}
              >
                <Typography sx={{ color: "white" }}>
                  {user?.subscribed ? "Subscribed" : "Subscribe"}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
