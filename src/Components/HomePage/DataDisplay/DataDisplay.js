import React from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

import PriceTable from "./PriceTable";
import GraphDisplay from "./GraphDisplay";

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
    </Box>
  );
}
