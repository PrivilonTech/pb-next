import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import Button from "@/Components/Button/Button";

export default function DownloadNow() {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "calc(100% + 4em)",
        height: { xs: "450px", md: "300px" },
        margin: "0em -2em",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: "#0f1a2e",
          padding: { xs: "10px 0", md: 0 },
          height: { xs: "50%", md: "100%" },
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: "0 2em", md: "0 4em" },
            height: "100%",
          }}
        >
          <Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "1.75rem", sm: "2rem" },
                  fontWeight: 400,
                }}
              >
                Start Benefiting Now
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: ".9rem", width: "90%" }}
              >
                Stay on top of current prices and news, reach thousands of
                companies and professionals.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "60%",
                m: "1.5em 0",
              }}
            >
              <Button
                label="Subscribe Now"
                outline
                noShadow
                onClick={() => router.push("/subscription")}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "url(/Services/download-now.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "contain",
          height: { xs: "50%", md: "100%" },
          width: { xs: "100%", md: "50%" },
        }}
      ></Box>
    </Box>
  );
}
