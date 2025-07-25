import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { getGlobalData } from "@/utils/apiCalls";
import TableContents from "./TableContents";

export default function PriceTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGlobalData("India", 10, 2022, setData, setLoading);
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "100%" },
        display: "flex",
        flexDirection: "column",
        gap: "1.5em",
        paddingBottom: { xs: "1em", lg: "" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1em", sm: "1.25rem" },
          textTransform: "uppercase",
          textAlign: "center",
          borderBottom: "1px solid #dee2e6",
          margin: "1em 1em 0 1em",
          fontWeight: "bold",
          fontFamily: "arial",
          color: "#ef6b67",
        }}
      >
        Weekly Polymer Price Tables
      </Typography>
      <TableContents data={data} loading={loading} />
    </Box>
  );
}
