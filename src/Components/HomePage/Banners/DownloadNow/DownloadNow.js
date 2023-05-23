import React from "react";
import { Box, Typography } from "@mui/material";

export default function DownloadNow() {
  return (
    <Box
      sx={{
        width: "calc(100% + 4em)",
        height: { xs: "400px", md: "300px" },
        margin: "0em -2em",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          background: "#0f1a2e",
          height: { xs: "50%", md: "100%" },
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: { xs: "0 2em", md: "0 4em" },
            height: "100%",
          }}
        >
          <Box>
            <Typography sx={{ color: "white", fontSize: "1.2rem" }}>
              Start Benefiting Now
            </Typography>
            <Typography sx={{ color: "white", fontSize: ".9rem" }}>
              Stay on top of current prices and news, Reach thousands of
              companies and professionals
            </Typography>
            <button
              style={{
                marginTop: "1em",
                padding: ".65em .75em",
                borderRadius: "7px",
                outline: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontWeight: 500, fontSize: ".9rem" }}>
                Subscribe Now
              </Typography>
            </button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "url(/Services/download-now.png)",
          backgroundSize: "cover",
          objectFit: "contain",
          height: { xs: "50%", md: "100%" },
          width: { xs: "100%", md: "50%" },
        }}
      ></Box>
    </Box>
  );
}
