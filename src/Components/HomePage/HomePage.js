import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Sidebar from "./Sidebar/Sidebar";
import CarouselComponent from "./Carousel/Carousel";
import DataDisplay from "./DataDisplay/DataDisplay";
import TwitterBlogs from "./DataDisplay/TwitterBlogs";
import AskQuestions from "./Banners/AskQuestions/AskQuestions";
import DownloadNow from "./Banners/DownloadNow/DownloadNow";
import Connect from "./Banners/Connect/Connect";
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
        height={300}
        numberOfImages={1}
        objectFit="cover"
        setDataChange={setDataChange}
      />
      <AdminCarouselUpload setDataChange={setDataChange} />
      <Box sx={{ padding: "2em 0" }}>
        <CarouselComponent
          srcArray={[
            "/Homepage/carousel/image_1.jpg",
            "/Homepage/carousel/image_2.jpg",
            "/Homepage/carousel/image_3.jpg",
          ]}
          linkArray={[
            "https://toplast.in/about/",
            "https://www.plexconcil.org/plexconnect/",
            "https://eliteplus.co.in/web/11th-vinyl_india/",
          ]}
          height={150}
          numberOfImages={2}
          objectFit="contain"
          padding="20px"
          setDataChange={setDataChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly ",
          margin: { xs: "1em 0", sm: "1em 0em", md: "1em 1em" },
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "2em", md: "0" },
        }}
      >
        <TwitterBlogs screenName="POLYMERBAZAAR" />
        <DataDisplay />
      </Box>
      <Sidebar />
      <Box>
        <AskQuestions />
        <Connect />
        <DownloadNow />
      </Box>
    </Box>
  );
}

export default HomePage;
