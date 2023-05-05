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
      <iframe
        height={400}
        src="https://www.youtube.com/embed/Q7oWElOK1hw"
        title="React.js Project to Embed Youtube Video in IFrame inside Browser Without any Library in Javascript"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
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
