import React from "react";
import { Box, Typography } from "@mui/material";

export default function WhatsAppScan() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: ".5em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: ".75em",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            textTransform: "uppercase",
            textAlign: "center",
            borderBottom: "1px solid #dee2e6",
            margin: "1em",
          }}
        >
          ASK US ANYTHING
        </Typography>
        <img
          src={"/Homepage/socials/whatsapp.png"}
          height={30}
          alt="whatsapp-icon"
        />
      </Box>
      <img src={"/Homepage/appStore/whatsappScan.jpeg"} alt="whatsapp-scan" />
    </Box>
  );
}
