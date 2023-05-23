import React from "react";
import { Box, Typography } from "@mui/material";

import WhatsappChatBotService from "./WhatsappChatBotService";

export default function PaneFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <WhatsappChatBotService
          textCommand="VCM"
          numericCommand="105"
          link="/"
          historicalDataCommand="VCM2122"
        />
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            margin: { xs: ".75em 0", md: "0" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={"/Services/WhatsappScan.jpg"} alt="whatsapp-scan" />
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: ".9rem", maxWidth: { md: "70%" } }}>
          <span style={{ fontWeight: "bold", color: "#e5322d" }}>
            Graph Posting Cycle Monthly:
          </span>{" "}
          In order to depict the on-going trend,we have selected a random date
          in every month under the historical data option.The entire price
          movement scenario is depicted by curves for the given grade at
          International ($/Mt).
        </Typography>
      </Box>
    </Box>
  );
}
