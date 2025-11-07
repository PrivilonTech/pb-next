import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-hot-toast";

import Sidebar from "./Sidebar/Sidebar";
import Connect from "./Banners/Connect/Connect";
import CarouselComponent from "./Carousel/Carousel";
import DataDisplay from "./DataDisplay/DataDisplay";
import TwitterBlogs from "./DataDisplay/TwitterBlogs";
import DownloadNow from "./Banners/DownloadNow/DownloadNow";
import AskQuestions from "./Banners/AskQuestions/AskQuestions";
import AdminCarouselUpload from "../Admin/AdminCarouselUpload";
import AdminPartnerCarouselUpload from "../Admin/AdminPartnerCarouselUpload";

import { getCarouselData } from "@/utils/apiCalls";
import {
  fetchHomepagePartnerCarousel,
  deleteHomepagePartnerCarousel,
} from "@/utils/homepageCarousel";

const DEFAULT_PARTNER_CAROUSEL = [
  {
    imageUrl: "/Homepage/carousel/image_1.jpeg",
    link: "https://ruplastica.ru/en/",
  },
  {
    imageUrl: "/Homepage/carousel/image_2.jpeg",
    link: "https://gcprs.org/",
  },
  {
    imageUrl: "/Homepage/carousel/image_3.jpeg",
    link: "https://www.taipeipack.com.tw/en/index.html",
  },
  {
    imageUrl: "/Homepage/carousel/image_4.jpeg",
    link: "https://www.egypes.com/",
  },
  {
    imageUrl: "/Homepage/carousel/image_5.jpeg",
    link: "https://plastworld.kz/?lang=en",
  },
  {
    imageUrl: "/Homepage/carousel/image_6.jpeg",
    link: "https://kplexkochi.com/",
  },
  {
    imageUrl: "/Homepage/carousel/image_7.gif",
    link: "https://www.chinaplasonline.com/",
  },
  {
    imageUrl: "/Homepage/carousel/image_8.jpeg",
    link: "https://visitors.plastindia.org/",
  },
  {
    imageUrl: "/Homepage/carousel/image_9.jpeg",
    link: "https://cpxindia.in/",
  },
];

function HomePage() {
  const currentUser = secureLocalStorage.getItem("user");

  const [data, setData] = useState([]);
  const [partnerCarousel, setPartnerCarousel] = useState([]);
  const [dataChange, setDataChange] = useState(false);

  useEffect(() => {
    getCarouselData(setData);
  }, [dataChange]);

  useEffect(() => {
    const loadPartnerCarousel = async () => {
      try {
        const entries = await fetchHomepagePartnerCarousel();
        setPartnerCarousel(entries);
      } catch (error) {
        console.log(error);
        toast.error("Unable to load carousel entries, showing defaults.");
        setPartnerCarousel([]);
      }
    };

    loadPartnerCarousel();
  }, [dataChange]);

  const srcArray = data.map((object) => object.imageUrl);
  const idArray = data.map((object) => object._id);
  const partnerSrcArray =
    partnerCarousel.length > 0
      ? partnerCarousel.map((entry) => entry.imageUrl)
      : DEFAULT_PARTNER_CAROUSEL.map((entry) => entry.imageUrl);
  const partnerLinkArray =
    partnerCarousel.length > 0
      ? partnerCarousel.map((entry) => entry.link)
      : DEFAULT_PARTNER_CAROUSEL.map((entry) => entry.link);
  const partnerIdArray =
    partnerCarousel.length > 0
      ? partnerCarousel.map((entry) => entry.id)
      : undefined;

  const handlePartnerDelete = async (entryId) => {
    await deleteHomepagePartnerCarousel(entryId);
  };

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
      <AdminPartnerCarouselUpload
        setDataChange={setDataChange}
        entries={partnerCarousel}
      />
      <Box sx={{ padding: "2em 0" }}>
        <CarouselComponent
          srcArray={partnerSrcArray}
          linkArray={partnerLinkArray}
          idArray={partnerIdArray}
          height={100}
          numberOfImages={4}
          objectFit="contain"
          padding="5px"
          setDataChange={setDataChange}
          onDelete={handlePartnerDelete}
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
        {/* <TwitterBlogs screenName="POLYMERBAZAAR" /> */}
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
