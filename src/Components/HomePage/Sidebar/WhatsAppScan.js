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
        height: "100%",
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

            fontWeight: "bold",
            fontFamily: "arial",

            backgroundImage:
              "linear-gradient(0deg, hsla(0, 100%, 89%, 1) 0%, hsla(2, 78%, 54%, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozBackgroundClip: "text",
            MozTextFillColor: "transparent",
            backgroundClip: "text",
            filter:
              "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffc8c8', endColorstr='#E5322D', GradientType=1)",
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
      <Box
        sx={{
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={"/Homepage/appStore/whatsappScan.jpeg"}
          style={{
            height: "300px",
          }}
          alt="whatsapp-scan"
        />
      </Box>
    </Box>
  );
}
