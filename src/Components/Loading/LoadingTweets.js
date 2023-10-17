import React from "react";
import { Box, Skeleton } from "@mui/material";

export default function LoadingTweets({ wideScreen }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        height: wideScreen ? 1200 : 800,
        pr: "1em",
        overflowY: "auto",
      }}
    >
      {Array.from({ length: 3 }, (_, index) => index + 1).map((id) => (
        <Box key={id} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Skeleton
            variant="rectangular"
            height={200}
            sx={{ borderRadius: 2 }}
          />
          <Skeleton variant="text" width="50%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" width="90%" />
        </Box>
      ))}
    </Box>
  );
}
