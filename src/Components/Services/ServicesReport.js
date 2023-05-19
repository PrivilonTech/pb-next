import React from "react";
import { Box, Typography } from "@mui/material";

import { servicesReport } from "@/menuLists/services";

export default function ServicesReport() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        margin: "1em 0",
      }}
    >
      {servicesReport.map((content) => (
        <Box
          key={content.id}
          sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}
        >
          <Typography sx={{ fontWeight: "bold", color: "#e5322d" }}>
            {content.title}
          </Typography>
          <ul style={{ display: "flex", flexDirection: "column", margin: 0 }}>
            {content.contentArray.map((item, index) => (
              <li key={index} style={{ fontSize: ".9rem" }}>
                {item}
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
}
