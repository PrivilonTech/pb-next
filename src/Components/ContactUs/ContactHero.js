import React from "react";
import { Box, Typography } from "@mui/material";

export default function ContactHero() {
  return (
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
        Speak to ICIS
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
          Access to expert insights on the latest industry developments and
          tracking market changes are vital in making sustainable business
        </Typography>
        <Typography sx={{ color: "white", fontSize: ".9rem" }}>
          If you would like to find out more about how we can work together to
          bring you actionable insight to support quality decisions, please
          provide your information below.
        </Typography>
      </Box>
    </Box>
  );
}
