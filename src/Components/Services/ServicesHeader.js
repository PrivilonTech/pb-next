import React from "react";
import { Box, Typography } from "@mui/material";

export default function ServicesHeader() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirecton: "column",
        }}
      >
        <img src={"/services/polymerLogo.png"} alt="polymer-logo" />
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          margin: ".5em 0",
          fontSize: ".9rem",
          color: "#1e1e1e",
        }}
      >
        Price | Prediction | Profit
      </Typography>
    </>
  );
}
