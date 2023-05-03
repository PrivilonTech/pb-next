import React from "react";
import { Skeleton } from "@mui/material";

export default function LoadingButton() {
  return (
    <>
      <Skeleton
        variant="rectangular"
        width={150}
        height={50}
        sx={{ borderRadius: "10px" }}
      />
    </>
  );
}
