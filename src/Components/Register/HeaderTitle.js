import React from "react";
import { Box, Typography } from "@mui/material";

export default function HeaderTitle({ title }) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "2rem",
          textAlign: "center",
          color: "#2d333a",
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
