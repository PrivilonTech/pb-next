import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";

export default function CarouselComponent() {
  return (
    <Box sx={{ margin: { xs: "1em 0em", sm: "1em", lg: "1em 5em" } }}>
      <Carousel
        autoPlay
        emulateTouch
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={3500}
      >
        <Box>
          <img
            src="/Homepage/hero/hero-image.jpg"
            style={{ objectFit: "cover", borderRadius: "10px" }}
            height={250}
          />
        </Box>
        <Box>
          <img
            src="/Homepage/hero/hero-image_2.jpg"
            height={250}
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </Box>
        <Box>
          <img
            src="/Homepage/hero/hero-image_3.jpg"
            height={250}
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </Box>
      </Carousel>
    </Box>
  );
}
