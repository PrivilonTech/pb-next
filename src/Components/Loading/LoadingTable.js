import React from "react";
import { Box, Skeleton } from "@mui/material";

export default function LoadingTable() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1em",
        justifyContent: "center",
        padding: { xs: "1em", sm: "" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <Skeleton
            variant="rectangular"
            width={300}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={300}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={300}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={300}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={300}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={300}
            sx={{ borderRadius: "10px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
