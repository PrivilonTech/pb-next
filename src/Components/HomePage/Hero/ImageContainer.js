import React from "react";
import { Box } from "@mui/material";

export default function ImageContainer() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* <img src={"/Homepage/hero/scribble.svg"} alt="scribble" /> */}
      <img
        src={"/Homepage/hero/hero-image.jpg"}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          borderRadius: "10px",
        }}
        alt="scribble"
        height={350}
      />
      <img
        src={"/Homepage/hero/hero-image_2.jpg"}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          borderRadius: "10px",
          position: "absolute",
          top: "140px",
          left: "-100px",
        }}
        alt="scribble"
        height={350}
      />
    </Box>
  );
}
