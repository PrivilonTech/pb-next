import React from "react";
import { Box } from "@mui/material";

import TwitterBlogs from "@/Components/HomePage/DataDisplay/TwitterBlogs";
import ScrollTop from "@/Components/HomePage/ScrollTop/ScrollTop";

export default function News() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: { xs: "2em", md: "3em 5em" },
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "2em", md: "0" },
      }}
    >
      <ScrollTop />
      <TwitterBlogs fullContent />
    </Box>
  );
}
