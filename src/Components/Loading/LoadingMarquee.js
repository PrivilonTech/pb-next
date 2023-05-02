import React from "react";
import { Box, Skeleton } from "@mui/material";

export default function LoadingMarquee() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        sx={{ borderRadius: "10px" }}
      />
    </Box>
  );
}
