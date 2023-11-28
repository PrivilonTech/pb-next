import React from "react";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import { Box, Typography } from "@mui/material";

import { getDelegationContent } from "@/utils/delegation";
import { CovidImpactDelegation } from "@/Components/Delegations";
import EmptyData from "@/Components/PaneContent/EmptyData";
import Image from "next/image";

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

  const delegationContent = getDelegationContent(year, country);

  if (!delegationContent) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2em",
          padding: "3em 2em",
        }}
      >
        <EmptyData />
      </Box>
    );
  }

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
          {delegationContent.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "2em",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {delegationContent.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              style={{ borderRadius: "10px", objectFit: "cover" }}
              width={300}
              height={300}
              alt="delegation image"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
