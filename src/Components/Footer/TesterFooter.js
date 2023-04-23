import React from "react";
import { Box, Typography } from "@mui/material";

import footerList from "../../../menuLists/footerList";

export default function TesterFooter() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10em",
          margin: "4em 0",
        }}
      >
        {footerList.map((footerColumn) => (
          <Box
            key={footerColumn.id}
            sx={{ display: "flex", flexDirection: "column", gap: "1em" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
              <Typography
                sx={{
                  color: "#657786",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                }}
              >
                {footerColumn.txt}
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1em" }}
              >
                {footerColumn.list.map((listItem) => (
                  <Typography
                    id={listItem.id}
                    sx={{
                      color: "#878997",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    {listItem.name}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "2em 0",
        }}
      >
        <Typography sx={{ fontSize: ".9rem" }}>
          Please refer Terms & Conditions : M/S SAMYAK ENTERPRISE, Ahmedabad,
          Gujarat, India. +91 93 745 24 365 All Copyright ©2007 - 2021 reserved.
        </Typography>
      </Box>
    </Box>
  );
}
