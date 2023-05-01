import React from "react";
import { Box, Typography } from "@mui/material";

import Products from "./Products";

export default function AssociateCategories() {
  return (
    <Box
      sx={{
        width: "300px",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        gap: "1.5em",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
          textTransform: "uppercase",
          textAlign: "center",
          borderBottom: "1px solid #dee2e6",
        }}
      >
        Associate Categories
      </Typography>
      <Products />
    </Box>
  );
}
