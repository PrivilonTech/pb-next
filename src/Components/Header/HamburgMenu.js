import React from "react";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Pane from "../Pane/Pane";

export default function HamburgMenu({ setShowHamburg, showHamburg }) {
  return (
    <Box
      sx={{
        height: "102vh",
        display: "flex",
        position: "absolute",
        top: "-10px",
        left: "-15px",
        background: "#fff",
        justifyContent: "space-around",
        zIndex: "99999",
        alignItems: "center",
        flexDirection: "column",
        transform: showHamburg ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 0.3s ease",
        background: "#EDF1FF",
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
        <Box sx={{ margin: "auto" }}>
          <img src={"/Header/logo.svg"} alt="Logo"></img>
        </Box>
        <Box
          sx={{
            height: "80%",
            width: "100%",
          }}
        >
          <Pane />
        </Box>
      </Box>
      <Box>
        <CloseIcon
          sx={{ fontSize: 34 }}
          onClick={() => setShowHamburg(false)}
        />
      </Box>
    </Box>
  );
}
