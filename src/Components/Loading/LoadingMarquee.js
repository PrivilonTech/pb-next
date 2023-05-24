import React from "react";
import { Box, Skeleton } from "@mui/material";

export default function LoadingMarquee() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding:"8px 0" }}>
      <Skeleton variant="rectangular" width={"100%"} />
    </Box>
  );
}
