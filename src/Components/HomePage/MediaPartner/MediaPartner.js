import React from "react";
import { Box, Typography } from "@mui/material";

export default function MediaPartner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "2em 0",
        gap: "2em",
      }}
    >
      <Typography
        sx={{ textAlign: "center", fontSize: { xs: "2.5rem", md: "3.5rem" } }}
      >
        Media Partners
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "space-evenly" },
        }}
      >
        <Box sx={{ height: { xs: 30, sm: 50 } }}>
          <img
            src={"/Homepage/sponsors/amara.png"}
            style={{ width: "100%", height: "100%" }}
            alt="amara"
          />
        </Box>
        <Box sx={{ height: { xs: 30, sm: 50 } }}>
          <img
            src={"/Homepage/sponsors/aven.png"}
            style={{ width: "100%", height: "100%" }}
            alt="aven"
          />
        </Box>
        <Box sx={{ height: { xs: 30, sm: 50 } }}>
          <img
            src={"/Homepage/sponsors/hexa.png"}
            style={{ width: "100%", height: "100%" }}
            alt="hexa"
          />
        </Box>
      </Box>
    </Box>
  );
}
