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
          fontSize: "1.5rem",
          textTransform: "uppercase",
          textAlign: "left",
          borderBottom: "1px solid #E5322D",
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
