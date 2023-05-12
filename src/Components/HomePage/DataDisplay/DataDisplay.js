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
        height: "auto",
        width: { xs: "100%", lg: "32%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
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
          marginBottom: "20px",
          // boxShadow:
          //   "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <PriceTable />
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          border: "0.5px solid rgba(99, 99, 99, 0.2)",
          boxShadow:
            "rgba(0,58,108, 0.45) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <AssociateCategories />
      </Box>
      <Box
        sx={{
          cursor: "pointer",
          border: "0.5px solid rgba(99, 99, 99, 0.2)",
          boxShadow:
            "rgba(0,58,108, 0.45) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          width: "100%",
        }}
      >
        <Socials />
      </Box>
    </Box>
  );
}
