import React from "react";
import { Box, Skeleton } from "@mui/material";

export default function LoadingTable() {
  return (
    <Box sx={{ display: "flex", gap: "1em", padding: { xs: "1em", sm: "" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5em",
          flexWrap: "wrap",
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
            width={170}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={170}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={170}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={170}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={170}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={170}
            sx={{ borderRadius: "10px" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          gap: ".5em",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Skeleton
            variant="rectangular"
            width={200}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            sx={{ borderRadius: "10px" }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            sx={{ borderRadius: "10px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
