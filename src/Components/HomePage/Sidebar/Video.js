import React from "react";
import { Box, Typography } from "@mui/material";

export default function Video() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "100%",
        flexDirection: "column",
        gap: "1.5em",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.25rem",
          textTransform: "uppercase",
          textAlign: "left",
          borderBottom: "1px solid #E5322D",

          fontWeight: "bold",
          fontFamily: "arial",

          background: "hsla(2, 78%, 54%, 1)",
          background:
            "linear-gradient(135deg, hsla(2, 78%, 54%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)",
          background:
            "-moz-linear-gradient(90deg, hsla(2, 78%, 54%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)",
          background:
            "-webkit-linear-gradient(90deg, hsla(2, 78%, 54%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)",
          filter:
            "progid: DXImageTransform.Microsoft.gradient( startColorstr='#E5322D', endColorstr='#ffc8c8', GradientType=1 )",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          backgroundClip: "text",
          "-moz-background-clip": "text",
          "-moz-text-fill-color": "transparent",
        }}
      >
        Market Videos
      </Typography>
      <iframe
        height={400}
        src="https://www.youtube.com/embed/Q7oWElOK1hw"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Box>
  );
}
