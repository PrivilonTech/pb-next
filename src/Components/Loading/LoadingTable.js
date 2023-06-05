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
          {Array.from({ length: 6 }, (_, index) => index + 1).map((id) => (
            <Skeleton
              key={id}
              variant="rectangular"
              width={300}
              sx={{ borderRadius: "10px" }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
