import React from "react";

import { Box, Typography } from "@mui/material";

export default function EventBanner() {
  return (
    <Box
      sx={{
        display: "flex",
        height: { xs: "450px", md: "400px" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Box sx={{ display: "flex", gap: "1em", padding: "3em", pb: 0 }}>
          <Typography sx={{ fontSize: "1.65rem", color: "#1e1e1e" }}>
            Connect.
          </Typography>
          <Typography sx={{ fontSize: "1.65rem", color: "#1e1e1e" }}>
            Engage.
          </Typography>
          <Typography sx={{ fontSize: "1.65rem", color: "#1e1e1e" }}>
            Learn.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            padding: ".5em 3em",
          }}
        >
          <Typography sx={{ fontSize: ".9rem" }}>
            ICIS conferences and events bring together communities from across
            the value chain within the chemical and energy sectors.
          </Typography>
          <Typography sx={{ fontSize: ".9rem" }}>
            Through our virtual, hybrid and face-to-face events, we aim to
            create a space to support, inspire and interact with our community
            networks.
          </Typography>
          <Typography sx={{ fontSize: ".9rem" }}>
            With the safety and welfare of our customers and colleagues our
            utmost priority, we are gradually re-introducing face-to-face events
            towards the end of 2021 in a hybrid format, enabling local audiences
            to meet in-person while providing an interactive virtual event
            experience for those unable to travel or with safety concerns. ICIS
            is proud to have supported our communities through the pandemic by
            providing a space to connect, engage and learn.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: "url(/Services/events.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "contain",
          height: { xs: "50%", md: "100%" },
          width: { xs: "100%", md: "50%" },
        }}
      ></Box>
    </Box>
  );
}
