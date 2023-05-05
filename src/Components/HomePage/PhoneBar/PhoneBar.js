import React from "react";
import { Box, Typography } from "@mui/material";

export default function PhoneBar() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#1e1e1e",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1em",
          padding: { xs: "5px 20px", sm: "0" },
        }}
      >
        <Typography sx={{ color: "white", fontSize: ".9rem" }}>
          +91 XXXXX XXXXX
        </Typography>
        <Typography sx={{ color: "white", fontSize: ".9rem" }}>
          CIN: UI2381020123
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "1em",
          padding: { xs: "5px 20px", sm: "0" },
        }}
      >
        <Typography sx={{ color: "white", fontSize: ".9rem" }}>FAQ</Typography>
        <Typography sx={{ color: "white", fontSize: ".9rem" }}>
          Contact
        </Typography>
        <Typography sx={{ color: "white", fontSize: ".9rem" }}>
          English
        </Typography>
      </Box>
    </Box>
  );
}
