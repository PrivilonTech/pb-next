import React from "react";
import { Box } from "@mui/material";

export default function GlobalMap() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "200px", md: "300px", lg: "400px" },
      }}
    >
      <img
        src={"/Homepage/sponsors/map.png"}
        alt="global-map"
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
      />
    </Box>
  );
}
