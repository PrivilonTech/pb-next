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

          backgroundImage:
            "linear-gradient(0deg, hsla(0, 100%, 89%, 1) 0%, hsla(2, 78%, 54%, 1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozBackgroundClip: "text",
          MozTextFillColor: "transparent",
          backgroundClip: "text",
          filter:
            "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffc8c8', endColorstr='#E5322D', GradientType=1)",
        }}
      >
        Socials
      </Typography>
      <SocialLinks />
    </Box>
  );
}
