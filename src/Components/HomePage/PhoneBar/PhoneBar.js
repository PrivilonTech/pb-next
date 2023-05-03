import React from "react";
import { Box, Typography } from "@mui/material";

export default function PhoneBar() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#1e1e1e",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "5px 0",
      }}
    >
      <Typography sx={{ color: "white", fontSize: ".9rem" }}>
        +91 XXXXX XXXXX
      </Typography>
      <Typography sx={{ color: "white", fontSize: ".9rem" }}>
        CIN: UI2381020123
      </Typography>
    </Box>
  );
}
