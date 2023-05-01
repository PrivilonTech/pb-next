import React from "react";
import { Box, Typography } from "@mui/material";

export default function Video() {
  return (
    <Box
      sx={{
        width: "300px",
        padding: "1em",
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
        style={{ borderRadius: "10px" }}
      ></video>
      <Box sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}>
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
