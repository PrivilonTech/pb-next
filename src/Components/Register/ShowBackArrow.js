import React from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

export default function ShowBackArrow() {
  const router = useRouter();

  return (
    <Box
      onClick={() => {
        router.back();
      }}
      sx={{
        position: "absolute",
        top: "30px",
        left: "50px",
        cursor: "pointer",
      }}
    >
      <ArrowBackIcon sx={{ color: "#1e1e1e", fontSize: 30 }} />
    </Box>
  );
}
