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
        <Typography
          sx={{
            mt: ".75em",
            textAlign: "center",
            fontSize: { xs: "2.5rem", md: "3rem" },
            fontWeight: "600",
            color: "#1e1e1e",
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
          ]}
          linkArray={[
            "https://www.plastexegypt.com/exhibition/book-a-stand/?utm_source=media-partner&utm_medium=web-banner&utm_campaign=BookAStand&utm_content=",
            "https://www.plastivision.org/",
            "https://plasteurasia.com/en/",
            "https://www.ipfjapan.jp/english/",
            "https://www.plastfocus.org/",
          ]}
          height={100}
          numberOfImages={3}
          objectFit="contain"
          padding="20px"
          setDataChange={setDataChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly ",
          margin: { xs: "1em 0", sm: "1em 0em", md: "2em 1em" },
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
