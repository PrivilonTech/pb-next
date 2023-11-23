import React from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

import PriceTable from "./PriceTable";
import GraphDisplay from "./GraphDisplay";
import AssociateCategories from "../Sidebar/AssociateCategories";

export default function DataDisplay() {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: "auto",
        width: { xs: "100%", lg: "30%" },
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
      {/* <Box
        onClick={() => router.push("/indian-bazaar")}
        sx={{
          cursor: "pointer",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <PriceTable />
      </Box> UNCOMMENT THIS CODE */}
    </Box>
  );
}
