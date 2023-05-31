import React from "react";
import { Box, Typography } from "@mui/material";

import EventBanner from "@/Components/HomePage/Banners/EventBanner/EventBanner";
import UpcomingEvents from "@/Components/Events/UpcomingEvents";

export default function index() {
  return (
    <Box
      sx={{
        margin: "2em 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "url(/Services/Contact-hero.jpg)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          objectFit: "cover",
          height: "50vh",
          padding: { xs: "1em 2em", md: "2em 6em" },
        }}
      >
        <Typography sx={{ fontSize: "4rem", color: "white", fontWeight: 400 }}>
          Conferences & Events
        </Typography>
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: ".5em",
          }}
        >
          <Typography sx={{ color: "white", fontSize: ".9rem" }}>
            From conferences and workshops to concerts and festivals, our Events
            page is your go-to resource for all things happening in your area or
            online.
          </Typography>
          <Typography sx={{ color: "white", fontSize: ".9rem" }}>
            Browse through our list or calendar view to discover event titles,
            dates, times, and locations.
          </Typography>
        </Box>
      </Box>
      <EventBanner />
      <UpcomingEvents />
    </Box>
  );
}
