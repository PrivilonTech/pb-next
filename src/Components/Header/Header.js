import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import Pane from "../Pane/Pane";

function Header() {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const [show, setShow] = useState(false);

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
            <Box
              sx={{
                margin: "auto",
                display: "flex",
                background: "#D7342D",
                color: "white",
                padding: "10px",
                borderRadius: "20px",
              }}
            >
              {" "}
              <PersonIcon />
              <Typography sx={{}}>SignIn / Register</Typography>
            </Box>
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
