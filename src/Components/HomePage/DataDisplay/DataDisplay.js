import React from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

import PriceTable from "./PriceTable";
import GraphDisplay from "./GraphDisplay";
import AssociateCategories from "../Sidebar/AssociateCategories";
import Socials from "../Sidebar/Socials";

export default function DataDisplay() {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: { xs: "auto", lg: "" },
        width: { xs: "100%", md: "350px" },
        display: "flex",
        flexDirection: { xs: "column", lg: "column" },
        justifyContent: "flex-end",
        alignItems: "flex-end",
        gap: { xs: "2em", lg: "" },
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <GraphDisplay />
      </Box>
      <Box
        onClick={() => router.push("/indian-bazaar")}
        sx={{
          cursor: "pointer",
          width: "100%",
        }}
      >
        <PriceTable />
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          border: "2px solid rgba(99, 99, 99, 0.2)",
          width: "100%",
        }}
      >
        <AssociateCategories />
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          border: "2px solid rgba(99, 99, 99, 0.2)",
          width: "100%",
        }}
      >
        <Socials />
      </Box>
    </Box>
  );
}
