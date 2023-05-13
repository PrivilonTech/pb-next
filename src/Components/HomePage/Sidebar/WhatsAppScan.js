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
