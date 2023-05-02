import React from "react";
import { Box, Typography } from "@mui/material";

import LoadingTable from "@/Components/Loading/LoadingTable";

export default function TableContents({ data, loading }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "3em",
        flexWrap: "wrap",
        padding: "1em",
      }}
    >
      {loading ? (
        <LoadingTable />
      ) : (
        data[0].dataKeys.slice(0, 2).map((dataHeading, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".5em",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderBottom: "2px solid gray",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    marginRight: "1em",
                  }}
                >
                  {dataHeading}
                </Typography>
                <Typography>{data[0].date}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "2em" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  {data[0].subKeys[dataHeading]
                    .slice(0, 5)
                    .map((dataContents, index) => (
                      <Typography key={index}>{dataContents}</Typography>
                    ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  {data[0].subValues[dataHeading]
                    .slice(0, 5)
                    .map((dataContents, index) => (
                      <Typography key={index}>{dataContents}</Typography>
                    ))}
                </Box>
              </Box>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
}
