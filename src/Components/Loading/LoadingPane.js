import React from "react";
import { Box, Skeleton } from "@mui/material";

const LoadingPane = ({ paneCount }) => {
  return (
    <Box
      sx={{
        margin: "auto",
        width: "100%",
        height: { xs: "75%", sm: "80%" },
        display: "flex",
        justifyContent: "flex-start",
        gap: 0,
        paddingLeft: { xs: "5px", sm: "15px" },
        flexWrap: "wrap",
      }}
    >
      {Array.from({ length: paneCount }).map((_, index) => (
        <Skeleton
          key={index}
          sx={{
            padding: { xs: ".75em", sm: ".5em" },
            lineHeight: "1px",
            width: { xs: 140, sm: 150 },
            margin: "10px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
          }}
          variant="rectangular"
          height={50}
        />
      ))}
    </Box>
  );
};

export default LoadingPane;
