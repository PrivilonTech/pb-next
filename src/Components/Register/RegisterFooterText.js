import React from "react";
import { Box, Typography } from "@mui/material";

export default function RegisterFooterText({
  footerText,
  handleToggleAuthMode,
  toggleText,
}) {
  return (
    <Box sx={{ display: "flex", gap: ".5em", justifyContent: "center" }}>
      <Typography sx={{ fontSize: ".9rem", color: "#6F6C90" }}>
        {footerText}
      </Typography>
      <Typography
        sx={{ fontSize: ".9rem", color: "#c31815", cursor: "pointer" }}
        onClick={handleToggleAuthMode}
      >
        {toggleText}
      </Typography>
    </Box>
  );
}
