import React from "react";
import { Box, Typography } from "@mui/material";

export default function FuturePolymer() {
  return (
    <Box
      sx={{
        height: "30vh",
        width: "90vw",

        margin: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/Homepage/image_2.jpg)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "#fff",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "45%",
          left: "37%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", fontWeight: "500" }}
        >
          Empower your future polymer decisions
        </Typography>
        <Typography>
          Monitor and capture the complexity of changing polymer markets with
          consolidated and forward-looking view of global markets.
        </Typography>
      </Box>
    </Box>
  );
}
