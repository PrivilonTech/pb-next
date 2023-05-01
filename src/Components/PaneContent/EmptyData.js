import React from "react";
import { Box, Typography } from "@mui/material";

export default function EmptyData() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: ".75em",
        justifyContent: "center",
        height: "50vh",
        alignItems: "center",
      }}
    >
      <img
        src={"/Homepage/emptyData.png"}
        alt="empty-data"
        height={60}
        width={60}
      />
      <Typography sx={{ fontSize: "2rem" }}>No Data Found</Typography>
    </Box>
  );
}
