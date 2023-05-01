import React from "react";
import { Box, Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";

export default function Socials() {
  return (
    <Box
      sx={{
        width: "300px",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
          textTransform: "uppercase",
          textAlign: "center",
          borderBottom: "1px solid #dee2e6",
        }}
      >
        Socials
      </Typography>
      <SocialLinks />
    </Box>
  );
}
