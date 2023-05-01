import React from "react";
import { Box, Typography } from "@mui/material";

export default function Video() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "300px" },
        display: "flex",
        flexDirection: "column",
        gap: "1.5em",
      }}
    >
      <video
        src={"/Homepage/video/Video.mp4"}
        autoPlay
        muted
        controls
        style={{ borderRadius: "10px", margin: "1em" }}
      ></video>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".25em",
          margin: "1em",
        }}
      >
        <Typography
          sx={{ fontSize: ".9rem", color: "#787878", fontWeight: "500" }}
        >
          Daily Video,
        </Typography>
        <Typography sx={{ fontSize: ".9rem" }}>
          We organise events all over India, including conferences, seminars,
          networking events and panel discussions. Showcasing the latest ideas
          and technologies Know more.
        </Typography>
      </Box>
    </Box>
  );
}
