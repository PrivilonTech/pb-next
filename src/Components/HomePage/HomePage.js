import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Sidebar from "./Sidebar/Sidebar";
import MediaPartner from "./MediaPartner/MediaPartner";
import CarouselComponent from "./Carousel/Carousel";
import DataDisplay from "./DataDisplay/DataDisplay";
import TwitterBlogs from "./DataDisplay/TwitterBlogs";
import AskQuestions from "./Banners/AskQuestions/AskQuestions";
import DownloadNow from "./Banners/DownloadNow/DownloadNow";
import GlobalMap from "./MediaPartner/GlobalMap";
import Connect from "./Banners/Connect/Connect";
import FuturePolymer from "./Banners/FuturePolymer/FuturePolymer";
import AdminCarouselUpload from "../Admin/AdminCarouselUpload";

import { getCarouselData } from "@/utils/apiCalls";

function HomePage() {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const [data, setData] = useState([]);
  const [dataChange, setDataChange] = useState(false);

  useEffect(() => {
    getCarouselData(setData);
  }, [dataChange]);

  const srcArray = data.map((object) => object.imageUrl);
  const idArray = data.map((object) => object._id);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        margin: ".75em 2em",
        mt: 0,
      }}
    >
      <CarouselComponent
        srcArray={srcArray}
        idArray={idArray}
        height={600}
        numberOfImages={1}
        objectFit="cover"
        setDataChange={setDataChange}
      />
      <AdminCarouselUpload setDataChange={setDataChange} />
      {/* <CarouselComponent
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
        setDataChange={setDataChange}
      /> */}
      <FuturePolymer />
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
        <Connect />
        <DownloadNow />
      </Box>
      <Box>
        {/* <MediaPartner /> */}
        <Typography
          sx={{
            mt: ".75em",
            textAlign: "center",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Media Partners
        </Typography>
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
          setDataChange={setDataChange}
        />
        <GlobalMap />
      </Box>
    </Box>
  );
}

export default HomePage;
