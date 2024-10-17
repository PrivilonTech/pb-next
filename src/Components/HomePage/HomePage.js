import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

import Sidebar from "./Sidebar/Sidebar";
import Connect from "./Banners/Connect/Connect";
import CarouselComponent from "./Carousel/Carousel";
import DataDisplay from "./DataDisplay/DataDisplay";
import TwitterBlogs from "./DataDisplay/TwitterBlogs";
import DownloadNow from "./Banners/DownloadNow/DownloadNow";
import AskQuestions from "./Banners/AskQuestions/AskQuestions";
import AdminCarouselUpload from "../Admin/AdminCarouselUpload";

import { getCarouselData } from "@/utils/apiCalls";

function HomePage() {
  const currentUser = secureLocalStorage.getItem("user");

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
            "/Homepage/carousel/image_4.jpg",
            "/Homepage/carousel/image_8.jpg",
            "/Homepage/carousel/image_9.jpg",
            "/Homepage/carousel/image_10.jpg",
            "/Homepage/carousel/image_6.jpg",
            "/Homepage/carousel/image_7.jpg",
          ]}
          linkArray={[
            "https://www.arabplast.info/",
            "https://plastoapp.com/",
            "http://www.gpca.org.ae",
            "https://indiachem.ficci.in/",
            "https://www.plexpoindia.org/",
            "https://www.taipeiplas.com.tw/zh-tw/index.html",
            "/",
            "/",
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
