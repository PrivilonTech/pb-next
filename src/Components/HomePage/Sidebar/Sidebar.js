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
        <Typography sx={{ fontSize: "3rem" }}>Heading One</Typography>
        <Typography>
          Paragraph oneParagraph oneParagraph oneParagraph oneParagraph
          oneParagraph oneParagraph oneParagraph oneParagraph oneParagraph
          oneParagraph oneParagraph oneParagraph oneParagraph oneParagraph
          oneParagraph oneParagraph oneParagraph oneParagraph oneParagraph
          oneParagraph oneParagraph oneParagraph oneParagraph oneParagraph
          oneParagraph oneParagraph oneParagraph oneParagraph one
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
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "10px",
          }}
        >
          <AssociateCategories />
          <Socials />
        </Box>
        <Box
          sx={{
            float: "right",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "10px",
          }}
        >
          <Video />
        </Box>
      </Box>
    </Box>
  );
}
