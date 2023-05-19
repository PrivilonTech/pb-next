import React from "react";
import { Box } from "@mui/material";

import CarouselComponent from "@/Components/HomePage/Carousel/Carousel";
import ServicesBlog from "@/Components/Services/ServicesBlog";
import ServicesReport from "@/Components/Services/ServicesReport";

function Services() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: { xs: "2em", md: "3em 5em" },
        flexDirection: "column",
        gap: { xs: "2em", md: "0" },
      }}
    >
      <ServicesBlog />
      <ServicesReport />
      <CarouselComponent
        srcArray={[
          "/Services/services_1.jpeg",
          "/Services/services_2.jpeg",
          "/Services/services_3.jpeg",
        ]}
        height={400}
        numberOfImages={1}
        objectFit="contain"
      />
    </Box>
  );
}

export default Services;
