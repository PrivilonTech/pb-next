import React from "react";
import { Box, Typography } from "@mui/material";

import ErrorIcon from "@mui/icons-material/Error";

export default function ErrorText({ errorText, showError }) {
  if (!showError) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", gap: ".5em", alignItems: "center" }}>
      <ErrorIcon sx={{ fontSize: "1rem", color: "red" }} />
      <Typography sx={{ color: "red", fontSize: ".8rem" }}>
        {errorText}
      </Typography>
    </Box>
  );
}
