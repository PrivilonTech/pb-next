import React from "react";
import { Box, Typography } from "@mui/material";

export default function index() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        padding: "3em 2em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2em",
            fontWeight: "bold",
            color: "#ef6b67",
          }}
        >
          PolymerBazaar Whatsapp ChatBot Powered by AI
        </Typography>
        <Typography sx={{ width: "75%", textAlign: "center" }}>
          We are proud to introduce our advanced AI-powered Chatbot . Our
          Chatbot provides instant information on polymer prices, news, and
          offers. With the power of AI, accurate information is @ your
          fingertips.
        </Typography>
      </Box>

      <iframe
        height={700}
        src="https://www.youtube.com/embed/7b4SliEg4gE"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Box>
  );
}
