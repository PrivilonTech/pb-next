import React from "react";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import { Box, Typography } from "@mui/material";

import { CovidImpactDelegation } from "@/Components/Delegations";

export default function index() {
  const router = useRouter();

  const { year, country } = router.query;

  if (!year || !country) {
    return (
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "50vh",
        }}
      >
        <ClipLoader color="#C31815" size={30} />
      </Box>
    );
  }

  if (year === "2020" || year === "2021") return <CovidImpactDelegation />;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        padding: "3em 2em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2em",
            fontWeight: "bold",
            color: "#ef6b67",
          }}
        >
          Content for {country} in {year}
        </Typography>
        <Typography sx={{ width: "75%", textAlign: "center" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse sint
          harum beatae officiis voluptas! Neque temporibus eaque labore optio
          possimus, quam pariatur commodi, laudantium explicabo, quasi
          consequuntur totam omnis repellendus in. Libero alias praesentium
          molestias. Asperiores ipsam ratione rerum voluptates. Perspiciatis
          quam vero harum totam dignissimos odio quisquam ad? Amet?
        </Typography>
      </Box>

      <iframe
        height={700}
        src="https://www.youtube.com/embed/7b4SliEg4gE"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Box>
  );
}
