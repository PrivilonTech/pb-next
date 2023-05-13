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
          fontSize: "1.25rem",
          textTransform: "uppercase",
          textAlign: "center",
          borderBottom: "1px solid #dee2e6",
          margin: "1em 1em 0 1em",
          fontWeight: "bold",
          fontFamily: "arial",

          background: "hsla(2, 78%, 54%, 1)",
          background:
            "linear-gradient(135deg, hsla(2, 78%, 54%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)",
          background:
            "-moz-linear-gradient(90deg, hsla(2, 78%, 54%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)",
          background:
            "-webkit-linear-gradient(90deg, hsla(2, 78%, 54%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)",
          filter:
            "progid: DXImageTransform.Microsoft.gradient( startColorstr='#E5322D', endColorstr='#ffc8c8', GradientType=1 )",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          backgroundClip: "text",
          "-moz-background-clip": "text",
          "-moz-text-fill-color": "transparent",
        }}
      >
        Weekly Polymer Price Tables
      </Typography>
      <TableContents data={data} loading={loading} />
    </Box>
  );
}
