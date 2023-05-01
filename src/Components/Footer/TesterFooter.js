import React from "react";
import { Box, Typography } from "@mui/material";

import footerList from "../../menuLists/footerList";

export default function TesterFooter() {
  return (
    <Box sx={{ margin: "0 2em" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // gap: { xs: "5em", lg: "8em" },
          margin: { xs: "4em 2em", md: "4em 8em" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {footerList.map((footerColumn) => (
          <Box
            key={footerColumn.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1em",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                width: "200px",
              }}
            >
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
                      width: "100%",
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
          color: "#1e1e1e",
          margin: { xs: "1em", sm: "2em 6em" },
          borderTop: "1px solid gray",
          paddingTop: "1em",
        }}
      >
        <Typography sx={{ fontSize: { xs: ".75em", lg: ".9rem" } }}>
          Please refer Terms & Conditions : M/S SAMYAK ENTERPRISE, Ahmedabad,
          Gujarat, India. +91 93 745 24 365 All Copyright ©2007 - 2021 reserved.
        </Typography>
      </Box>
    </Box>
  );
}
