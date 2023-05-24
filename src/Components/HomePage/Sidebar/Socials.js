import React from "react";
import { Box, Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";

export default function Socials() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.25rem",
          textTransform: "uppercase",
          textAlign: "center",
          borderBottom: "1px solid #dee2e6",
          margin: "1em 1em 0 1em",

          fontWeight: "bold",
          fontFamily: "arial",
          color: "#ef6b67",
        }}
      >
        Socials
      </Typography>
      <SocialLinks />
    </Box>
  );
}
