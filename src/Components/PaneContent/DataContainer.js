import React from "react";
import { Box, Typography } from "@mui/material";

export default function DataContainer({ title, listItem }) {
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
      <ul
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {listItem.map((text, index) => (
          <li key={index}>
            <Typography sx={{ color: "#575757", fontSize: ".9rem" }}>
              {text}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}
