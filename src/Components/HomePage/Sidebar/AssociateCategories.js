import React from "react";
import { Box, Typography } from "@mui/material";

import Products from "./Products";

export default function AssociateCategories() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: ".5em",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.25rem",
          textTransform: "uppercase",
          textAlign: "center",
          borderBottom: "1px solid #dee2e6",
          marginBottom: "1em",

          fontWeight: "bold",
          fontFamily: "arial",
          color: "#ef6b67",
        }}
      >
        Associate Categories
      </Typography>
      <Products />
    </Box>
  );
}
