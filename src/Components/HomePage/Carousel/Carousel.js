import React from "react";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CarouselComponent({
  srcArray,
  height,
  numberOfImages,
  padding,
  objectFit,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numberOfImages,
    slidesToScroll: numberOfImages,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <Box sx={{ margin: { xs: "1em 0em", sm: "1em", lg: "1em 5em" } }}>
      <Slider {...settings}>
        {srcArray.map((src, index) => (
          <Box
            key={index}
            sx={{
              padding: padding ? padding : 0,
            }}
          >
            <img
              src={src}
              style={{
                objectFit: objectFit,
                width: "100%",
              }}
              alt="carousel-display"
              height={height}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
