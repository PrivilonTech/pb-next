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
        <img
          src={"/Services/PolymerLogo.png"}
          alt="polymer-logo"
          height={150}
        />
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
