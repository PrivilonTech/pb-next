import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Sidebar from "./Sidebar/Sidebar";
import MediaPartner from "./MediaPartner/MediaPartner";
import CarouselComponent from "./Carousel/Carousel";
import DataDisplay from "./DataDisplay/DataDisplay";
import ScrollTop from "./ScrollTop/ScrollTop";
import TwitterBlogs from "./DataDisplay/TwitterBlogs";
import AskQuestions from "./AskQuestions/AskQuestions";
import DownloadNow from "./DownloadNow/DownloadNow";
import GlobalMap from "./MediaPartner/GlobalMap";

function HomePage() {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        margin: ".75em 2em",
      }}
    >
      <CarouselComponent
        srcArray={[
          "/Homepage/hero/hero-image.jpg",
          "/Homepage/hero/hero-image_2.jpg",
          "/Homepage/hero/hero-image_3.jpg",
          "/Homepage/hero/hero-image_4.jpg",
        ]}
        height={400}
        numberOfImages={1}
        objectFit="cover"
      />
      <CarouselComponent
        srcArray={[
          "/Homepage/carousel/image_1.jpg",
          "/Homepage/carousel/image_2.jpg",
          "/Homepage/carousel/image_3.jpg",
          "/Homepage/carousel/image_4.jpg",
          "/Homepage/carousel/image_5.jpg",
          "/Homepage/carousel/image_6.jpg",
          "/Homepage/carousel/image_7.jpg",
          "/Homepage/carousel/image_8.jpg",
        ]}
        height={100}
        numberOfImages={upMd ? 5 : 3}
        objectFit="contain"
        padding="20px"
      />
      <ScrollTop />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly ",
          margin: { xs: "1em 0", sm: "1em 0em", md: "2em 1em" },
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "2em", md: "0" },
        }}
      >
        <TwitterBlogs />
        <DataDisplay />
      </Box>
      <Sidebar />
      <Box>
        <AskQuestions />
        <DownloadNow />
      </Box>
      <Box>
        <MediaPartner />
        <GlobalMap />
      </Box>
    </Box>
  );
}

export default HomePage;
