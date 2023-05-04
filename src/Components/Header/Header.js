import React, { useEffect, useState, useContext } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import firebaseApp from "@/firebase/clientApp";
import secureLocalStorage from "react-secure-storage";

import { Box, Skeleton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import ProfileMenu from "./ProfileMenu";
import HamburgMenu from "./HamburgMenu";
import { ModalContext } from "../HomePage/ModalProvider";
import useCurrentUser from "@/hooks/useCurrentUser";
import Button from "../Button/Button";
import LoadingButton from "../Loading/LoadingButton";

function Header() {
  const auth = getAuth(firebaseApp);
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

  const [showHamburg, setShowHamburg] = useState(false);
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);
  const currentUser = useCurrentUser();

  const user = secureLocalStorage.getItem("user");

  //if someone resizes disable hamburg menu on large screens
  useEffect(() => {
    setShowHamburg(false);
  }, [upMd]);

  useEffect(() => {
    //close user profile menu
    window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        setIsUserProfileModalOpen(false);
      }
    });
  }, []);

  const handleToggleProfileMenu = () => {
    setIsUserProfileModalOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {upMd ? (
        <Box
          sx={{
            height: "10vh",
            display: "flex",
            justifyContent: "space-between",
            padding: { xs: ".5em 1em", md: ".5em 3em" },
            paddingTop: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "40%",
            }}
          >
            <Box
              onClick={() => router.push("/")}
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <img src={"/Header/logo.svg"} alt="Logo"></img>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            {user ? (
              <>
                {user?.role === "admin" ? (
                  <Box
                    sx={{
                      border: "2px solid gray",
                      padding: ".5em 1em",
                      borderRadius: "10px",
                    }}
                  >
                    <Link href="https://pb-admin-khaki.vercel.app/">
                      <Typography sx={{ color: "#1e1e1e" }}>
                        Admin Panel
                      </Typography>
                    </Link>
                  </Box>
                ) : (
                  user?.subscribed === "false" && (
                    <Button
                      label="Subscribe Now"
                      onClick={() => router.push("/subscription")}
                    />
                  )
                )}
                <Box
                  onClick={handleToggleProfileMenu}
                  sx={{
                    margin: ".5em 30px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={
                      currentUser?.photoURL
                        ? currentUser.photoURL
                        : "/Header/placeholderUser.png"
                    }
                    alt="profile picture"
                    height={50}
                    style={{
                      borderRadius: "50%",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    }}
                  />
                </Box>
              </>
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
            padding: { xs: ".5em 1em", md: ".5em 3em" },
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
              <img src={"/Header/hamburg.svg"} alt="hamburg-icon" />
            </Box>
            <Box onClick={() => router.push("/")} sx={{ margin: "auto" }}>
              <img src={"/Header/logo.svg"} alt="Logo" height={25}></img>
            </Box>
          </Box>
          <HamburgMenu
            setShowHamburg={setShowHamburg}
            showHamburg={showHamburg}
            auth={auth}
          />
        </Box>
      )}
      {isUserProfileModalOpen && (
        <ProfileMenu setIsUserProfileModalOpen={setIsUserProfileModalOpen} />
      )}
    </Box>
  );
}

export default Header;
