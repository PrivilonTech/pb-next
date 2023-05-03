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
          fontSize: "1.5rem",
          textTransform: "uppercase",
          textAlign: "center",
          borderBottom: "1px solid #dee2e6",
          margin: "1em",
        }}
      >
        Associate Categories
      </Typography>
      <Products />
    </Box>
  );
}
