import React from "react";
import { Box, Typography } from "@mui/material";

import AssociateCategories from "./AssociateCategories";
import Socials from "./Socials";
import Video from "./Video";

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
      <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
        <Box
          sx={{
            border: "2px solid rgba(99, 99, 99, 0.2)",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <Video />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "column" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "column" },
            justifyContent: { xs: "center", lg: "" },
            gap: "2em",
            width: "100%",
          }}
        >
          <Box
            sx={{
              float: "right",
              border: "2px solid rgba(99, 99, 99, 0.2)",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            <AssociateCategories />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "column" },
            justifyContent: { xs: "flex-end", lg: "" },
            alignItems: "stretch",
            gap: "2em",
            width: "100%",
          }}
        >
          <Box
            sx={{
              float: "right",
              border: "2px solid rgba(99, 99, 99, 0.2)",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            <Socials />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
