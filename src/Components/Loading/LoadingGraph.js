import React from "react";
import { Skeleton } from "@mui/material";

export default function LoadingGraph() {
  return (
    <>
      <Skeleton
        variant="rectangular"
        sx={{
          borderRadius: "10px",
          height: { xs: "400px", lg: "100%" },
          width: { xs: "100%", lg: 500 },
        }}
      />
    </>
  );
}
