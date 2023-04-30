import React from "react";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

export default function Loading({ children, isLoading }) {
  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            height: "100vh",
          }}
        >
          <ClipLoader color="#C31815" />
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
