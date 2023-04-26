import React, { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import firebaseApp from "@/firebase/clientApp";
import Link from "next/link";
import ProfileMenu from "./ProfileMenu";
import HamburgMenu from "./HamburgMenu";

function Header() {
  const auth = getAuth(firebaseApp);
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const targetRef = useRef(null);
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);

  const [showHamburg, setShowHamburg] = useState(false);
  const [user, setUser] = useState(null);

  //if someone resizes disable hamburg menu on large screens
  useEffect(() => {
    setShowHamburg(false);
  }, [upMd]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    //close user profile menu
    window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        setIsUserProfileModalOpen(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleToggleProfileMenu = () => {
    setIsUserProfileModalOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "relative",
        padding: { xs: ".5em 1em", md: ".5em 3em" },
      }}
    >
      {upMd ? (
        <Box
          sx={{
            height: "10vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "40%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={"/Header/logo.svg"} alt="Logo"></img>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {user ? (
              <Box
                onClick={handleToggleProfileMenu}
                sx={{
                  background: "#d9232a",
                  padding: ".5em 1.25em",
                  borderRadius: "10px",
                  cursor: "pointer",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  "&:hover": {
                    background: "#c7161d",
                  },
                  transition: "background 150ms ease-in",
                }}
              >
                <Typography sx={{ color: "white" }}>
                  Hello{" "}
                  {user.displayName ? user.displayName.split(" ")[0] : "User"}{" "}
                </Typography>
              </Box>
            ) : (
              <Link href="/register">
                <Box
                  sx={{
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    background: "#d9232a",
                    color: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    "&:hover": {
                      background: "#c7161d",
                    },
                    transition: "background 150ms ease-in",
                  }}
                >
                  {" "}
                  <PersonOutlineOutlinedIcon sx={{ fontSize: "1.25em" }} />
                  <Typography>Sign in / </Typography>
                  <CreateOutlinedIcon sx={{ fontSize: "1.2em" }} />
                  <Typography> Register</Typography>
                </Box>
              </Link>
            )}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: "10vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <Box
              sx={{ margin: "auto", width: "100%" }}
              onClick={() => setShowHamburg(true)}
            >
              <MenuIcon sx={{ fontSize: 34 }} />
            </Box>
            <Box sx={{ margin: "auto" }}>
              <img src={"/Header/logo.svg"} alt="Logo" height={25}></img>
            </Box>
          </Box>
        </Box>
      )}
      {
        <HamburgMenu
          setShowHamburg={setShowHamburg}
          showHamburg={showHamburg}
          user={user}
          auth={auth}
        />
      }
      {isUserProfileModalOpen && (
        <ProfileMenu
          setIsUserProfileModalOpen={setIsUserProfileModalOpen}
          targetRef={targetRef}
        />
      )}
    </Box>
  );
}

export default Header;
