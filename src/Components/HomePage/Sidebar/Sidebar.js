import React from "react";
import { Box, Typography } from "@mui/material";

import AssociateCategories from "./AssociateCategories";
import Socials from "./Socials";
import Video from "./Video";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "1em 0",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "2em", lg: "" },
      }}
    >
      <Box sx={{ float: "left" }}>
        <Typography sx={{ fontSize: "3rem" }}>About Us</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam
          accusantium amet dolores neque itaque exercitationem! Aliquid esse vel
          culpa mollitia nihil vitae eos adipisci assumenda consequuntur
          laboriosam, commodi voluptatibus expedita! Neque adipisci doloribus
          fugit omnis repellat quaerat aliquam eaque expedita accusamus dolorem
          modi harum debitis rerum, laboriosam necessitatibus ad.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "column" },
          justifyContent: { xs: "center", lg: "" },
          gap: "2em",
        }}
      >
        <Box
          sx={{
            float: "right",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "10px",
          }}
        >
          <AssociateCategories />
          <Socials />
        </Box>
        <Box
          sx={{
            float: "right",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "10px",
          }}
        >
          <Video />
        </Box>
      </Box>
    </Box>
  );
}
