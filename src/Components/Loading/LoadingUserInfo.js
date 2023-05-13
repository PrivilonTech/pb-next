import { Box, Skeleton } from "@mui/material";
import React from "react";

const LoadingUserInfo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}>
      <Skeleton variant="text" width={100} />
      <Skeleton variant="text" width={200} />
    </Box>
  );
};

export default LoadingUserInfo;
