import React from "react";
import { Box, Typography } from "@mui/material";
import MarkdownView from "react-showdown";

export default function Blog({ data }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "100%" },
        minHeight: "250px",
        borderRadius: "10px",
        background: "#f9e8e8",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ background: "#d9232a", padding: ".5em" }}>
        <Typography sx={{ color: "#D9D9D9", textAlign: "center" }}>
          {data.title}
        </Typography>
      </Box>
      <Box sx={{ padding: "1em 2em" }}>
        <MarkdownView markdown={data.blogContent} />
      </Box>
    </Box>
  );
}
