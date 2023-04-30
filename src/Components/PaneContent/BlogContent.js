import React from "react";
import { Box } from "@mui/material";

import Blog from "./Blog";

export default function BlogContent({ data }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "3em 1em",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {data.map((dataItem) => (
        <Blog key={dataItem._id} data={dataItem} />
      ))}
    </Box>
  );
}
