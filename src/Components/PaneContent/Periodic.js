import React from "react";
import { Box, Typography } from "@mui/material";

export default function Periodic({ periodicTime, setPeriodicTime }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <Typography
        onClick={() => setPeriodicTime("Weekly")}
        sx={{
          display: "flex",
          alignItems: "center",
          color: periodicTime === "Weekly" ? "#4bb54c" : "#7c7e8c",
          background: periodicTime === "Weekly" && "#e5faf5",
          cursor: "pointer",
          padding: ".6em .7em",
          borderRadius: "50%",
          "&:hover": {
            background: "#e5faf5",
          },
          transition: "background 150ms ease-in",
        }}
      >
        1W
      </Typography>
      <Typography
        onClick={() => setPeriodicTime("Monthly")}
        sx={{
          display: "flex",
          alignItems: "center",
          color: periodicTime === "Monthly" ? "#4bb54c" : "#7c7e8c",
          background: periodicTime === "Monthly" && "#e5faf5",
          padding: ".5em .7em",
          borderRadius: "50%",
          cursor: "pointer",
          "&:hover": {
            background: "#e5faf5",
          },
          transition: "background 150ms ease-in",
        }}
      >
        1M
      </Typography>
      <Typography
        onClick={() => setPeriodicTime("Yearly")}
        sx={{
          display: "flex",
          alignItems: "center",
          color: periodicTime === "Yearly" ? "#4bb54c" : "#7c7e8c",
          background: periodicTime === "Yearly" && "#e5faf5",
          cursor: "pointer",
          padding: ".5em .9em",
          borderRadius: "50%",
          "&:hover": {
            background: "#e5faf5",
          },
          transition: "background 150ms ease-in",
        }}
      >
        1Y
      </Typography>
    </Box>
  );
}
