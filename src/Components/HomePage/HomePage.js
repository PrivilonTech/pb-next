import React from "react";
import { Box } from "@mui/material";

import Sidebar from "./Sidebar/Sidebar";
import MediaPartner from "./MediaPartner/MediaPartner";
import CarouselComponent from "./Carousel/Carousel";
import DataDisplay from "./DataDisplay/DataDisplay";
import ScrollTop from "./ScrollTop/ScrollTop";

function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        margin: ".75em 2em",
      }}
    >
      <CarouselComponent />
      <ScrollTop />
      <DataDisplay />
      <Sidebar />
      <MediaPartner />
    </Box>
  );
}

export default HomePage;
