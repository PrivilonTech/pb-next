import React from "react";
import { Box } from "@mui/material";

import Video from "./Video";
import AssociateCategories from "./AssociateCategories";

export default function Sidebar() {
  return (
    <Box
      sx={{
        float: "left",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "2em", lg: "" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", lg: "60%" },
          height: "100%",
        }}
      >
        <Video />
      </Box>
      <Box sx={{ width: { xs: "100%", lg: "35%" } }}>
        <AssociateCategories />
      </Box>
    </Box>
  );
}
