import React from "react";
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        marginTop: ".75em",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          height: { xs: "50vh", md: "100%" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "70%",
            width: "70%",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              marginBottom: ".25em",
              fontSize: { xs: "10vmin", md: "8vmin" },
              fontWeight: "bold",
            }}
          >
            Price Prediction Profit
          </Typography>
          <Typography
            sx={{
              margin: "auto",
              fontWeight: "bold",
              color: "#575757",
            }}
          >
            The single platform for polymer news and business
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          height: { xs: "40%", md: "100%" },
          display: "flex",
        }}
      >
        <Box
          sx={{
            margin: "auto",
          }}
        >
          <img
            style={{ width: "100%" }}
            src={"./Homepage/welcome.svg"}
            alt="welcome"
          />
        </Box>
      </Box>
    </Box>
  );
}
