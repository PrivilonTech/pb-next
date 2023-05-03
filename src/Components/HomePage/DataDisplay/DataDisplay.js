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
        height: { xs: "auto", lg: "60vh" },
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "center",
        gap: { xs: "2em", lg: "" },
        margin: { xs: "1em 0", sm: "1em 2em", md: "4em 3em" },
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
        }}
      >
        <GraphDisplay />
      </Box>
      <Box
        onClick={() => router.push("/indian-bazaar")}
        sx={{
          border: "2px solid rgba(99, 99, 99, 0.2)",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <PriceTable />
      </Box>
    </Box>
  );
}
