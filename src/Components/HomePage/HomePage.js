import React from "react";
import { Box } from "@mui/material";

import Sidebar from "./Sidebar/Sidebar";
import MediaPartner from "./MediaPartner/MediaPartner";
import CarouselComponent from "./Carousel/Carousel";
import DataDisplay from "./DataDisplay/DataDisplay";
import ScrollTop from "./ScrollTop/ScrollTop";
import TwitterBlogs from "./DataDisplay/TwitterBlogs";
import AskQuestions from "./AskQuestions/AskQuestions";
import DownloadNow from "./DownloadNow/DownloadNow";

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
      {/* <CarouselComponent /> */}
      <ScrollTop />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: { xs: "1em 0", sm: "1em 0em", md: "2em 1em" },
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "2em", md: "0" },
        }}
      >
        <TwitterBlogs />
        <DataDisplay />
      </Box>
      <Sidebar />
      <AskQuestions />
      <DownloadNow />
      <MediaPartner />
    </Box>
  );
}

export default HomePage;
