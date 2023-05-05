import React from "react";
import { Box } from "@mui/material";

import Video from "./Video";
import WhatsAppScan from "./WhatsAppScan";

export default function Sidebar() {
  return (
    <Box
      sx={{
        float: "left",
        width: "100%",
        margin: "1em auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "2em", lg: "" },
      }}
    >
      <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Video />
        </Box>
      </Box>
      <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
        <Box
          sx={{
            border: "2px solid rgba(99, 99, 99, 0.2)",
            width: "100%",
            height: "100%",
          }}
        >
          <WhatsAppScan />
        </Box>
      </Box>
    </Box>
  );
}
