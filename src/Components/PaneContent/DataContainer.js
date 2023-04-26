import React from "react";
import { Box, Typography } from "@mui/material";

export default function DataContainer({ title, polymerSubType, polymerValue }) {
  return (
    <Box
      sx={{
        height: "auto",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        background: "#f9e8e8",
        flexGrow: "1",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          background: "#d9232a",
          color: "#D9D9D9",
          padding: "5px 0",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "1em 3em",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: ".25em" }}>
          {polymerSubType.map((text, index) => (
            <Typography key={index}>{text}</Typography>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: ".25em" }}>
          {polymerValue.map((text, index) => (
            <Typography key={index}>{text}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
