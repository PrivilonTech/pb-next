import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

export default function Loading({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

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
