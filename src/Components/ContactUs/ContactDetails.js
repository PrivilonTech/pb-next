import React from "react";
import { Box, Typography } from "@mui/material";
import Input from "../Register/Input";

export default function ContactDetails({ setEmail, setPhone }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: ".75em", md: 0 },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5em",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Typography>
          Work Email <span style={{ color: "red" }}>*</span>
        </Typography>
        <Input
          type="email"
          placeholder="e.g: xyz@gmail.com"
          setState={setEmail}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5em",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Typography>
          Phone Number <span style={{ color: "red" }}>*</span>
        </Typography>
        <Input
          type="tel"
          placeholder="e.g: +91 XXXXX XXXXX"
          setState={setPhone}
        />
      </Box>
    </Box>
  );
}
