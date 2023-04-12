import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
  const theme = useTheme();

  const udMd = theme.breakpoints.up("md");
  return (
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
  );
}

export default Header;
