import React from "react";
import { Box } from "@mui/material";

import HeroSection from "./Hero/HeroSection";
import Sidebar from "./Sidebar/Sidebar";
import MediaPartner from "./MediaPartner/MediaPartner";
import TestHeroSection from "./Hero/TestHeroSection";

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
      {/* <HeroSection /> */}
      <TestHeroSection />
      <Sidebar />
      <MediaPartner />
    </Box>
  );
}

export default HomePage;
