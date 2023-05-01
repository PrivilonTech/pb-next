import React from "react";
import { Box, Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";

export default function Socials() {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "300px" },
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
          margin: "1em",
        }}
      >
        Socials
      </Typography>
      <SocialLinks />
    </Box>
  );
}
