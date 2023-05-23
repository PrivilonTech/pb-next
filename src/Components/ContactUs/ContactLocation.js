import React from "react";
import { Box, Typography } from "@mui/material";
import { CountryDropdown } from "react-country-region-selector";

import Input from "../Register/Input";

export default function ContactLocation({ setCompany, setLocation, location }) {
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
          Company <span style={{ color: "red" }}>*</span>
        </Typography>
        <Input
          type="text"
          placeholder="e.g: ABC Enterprise"
          setState={setCompany}
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
          Country <span style={{ color: "red" }}>*</span>
        </Typography>
        <CountryDropdown
          value={location}
          onChange={(value) => setLocation(value)}
          style={{
            padding: ".75em",
            outline: "none",
            border: "2px solid #d7dbd8",
            color: "#2d333a",
            borderRadius: "7px",
            fontSize: "1rem",
            width: "95%",
          }}
        />
      </Box>
    </Box>
  );
}
