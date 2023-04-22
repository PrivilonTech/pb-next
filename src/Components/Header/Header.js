import React, { useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Pane from "../Pane/Pane";
import { ModalContext } from "../ModalProvider/ModalProvider";
import firebaseApp from "@/firebase/clientApp";
import Link from "next/link";

function Header() {
  const auth = getAuth(firebaseApp);

  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const { setIsUserProfileModalOpen } = useContext(ModalContext);

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
    <>
      {upMd ? (
        <Box
          sx={{
            height: "10vh",
            transition: "transform 0.3s ease",
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
            <Box sx={{ margin: "auto" }}>
              <MenuIcon sx={{ fontSize: 34 }} />
            </Box>
            <Box sx={{ margin: "auto" }}>
              <img src={"/Header/logo.svg"} alt="Logo"></img>
            </Box>
          </Box>
          <Box sx={{ margin: "auto", marginRight: "5vw" }}>
            {user ? (
              <Box
                onClick={() => setIsUserProfileModalOpen((value) => !value)}
                sx={{
                  border: "1px solid #2d333a",
                  padding: ".5em 1.25em",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ color: "#2d333a" }}>
                  Hello{" "}
                  {user.displayName ? user.displayName.split(" ")[0] : "user"}{" "}
                  👋
                </Typography>
              </Box>
            ) : (
              <Link href="/auth" sx={{}}>
                <Box
                  sx={{
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    background: "#D7342D",
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  <PersonOutlineOutlinedIcon sx={{ fontSize: "1.25em" }} />
                  <Typography sx={{}}>Sign in / </Typography>
                  <CreateOutlinedIcon sx={{ fontSize: "1.2em" }} />
                  <Typography sx={{}}> Register</Typography>
                </Box>
              </Link>
            )}
          </Box>
        </Box>
      ) : !show ? (
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
              onClick={() => setShow(!show)}
            >
              <MenuIcon sx={{ fontSize: 34 }} />
            </Box>
            <Box sx={{ margin: "auto" }}>
              <img src={"/Header/logo.svg"} alt="Logo"></img>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            position: "absolute",
            background: "#fff",
            width: "100%",
            justifyContent: "space-around",
            zIndex: "99999",
            alignItems: "center",
            flexDirection: "column",
            transition: "transform 0.3s ease",
            background: "#EDF1FF",
          }}
        >
          <Box
            sx={{
              height: "90%",

              width: "90%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ margin: "auto" }}>
              <img src={"/Header/logo.svg"} alt="Logo"></img>
            </Box>
            <Box sx={{ height: "20%", width: "100%" }}>
              <Box sx={{}}></Box>
              <Box sx={{}}></Box>
            </Box>
            <Box sx={{ height: "80%", width: "100%" }}>
              <Pane show={show} />
            </Box>
          </Box>
          <CloseIcon sx={{ fontSize: 34 }} onClick={() => setShow(!show)} />
        </Box>
      )}
    </>
  );
}

export default Header;
