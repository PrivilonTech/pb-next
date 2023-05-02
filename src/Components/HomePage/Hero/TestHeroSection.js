import React from "react";
import { Box, Typography } from "@mui/material";

import ImageContainer from "./ImageContainer";
import PriceTable from "./PriceTable";

export default function TestHeroSection() {
  return (
    <Box
      sx={{
        height: { xs: "auto", lg: "60vh" },
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "2em", lg: "" },
        margin: { xs: "1em 0", sm: "1em 2em", md: "4em 3em" },
      }}
    >
      <Box>
        <Typography sx={{ fontSize: ".9rem", fontWeight: 600 }}>
          HOME
        </Typography>

        <Typography
          sx={{ fontSize: { xs: "3rem", sm: "4rem" }, fontWeight: "500" }}
        >
          Price Prediction Profit
        </Typography>
        <Typography
          sx={{
            color: "#575757",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            width: { xs: "100%", sm: "75%" },
          }}
        >
          We organise events all over India, including conferences, seminars,
          networking events and panel discussions.
        </Typography>
      </Box>
      {/* <ImageContainer /> */}
      <Box
        sx={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          borderRadius: "10px",
        }}
      >
        <PriceTable />
      </Box>
    </Box>
  );
}
