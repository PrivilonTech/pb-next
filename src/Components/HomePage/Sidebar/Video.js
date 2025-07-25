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
          borderBottom: "1px solid #dee2e6",

          fontWeight: "bold",
          fontFamily: "arial",
          color: "#ef6b67",
        }}
      >
        Market Videos
      </Typography>
      <iframe
        height={400}
        src="https://www.youtube.com/embed/7b4SliEg4gE"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Box>
  );
}
