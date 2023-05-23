import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function WhatsappChatBotService({
  textCommand,
  numericCommand,
  link,
  historicalDataCommand,
}) {
  return (
    <Box sx={{ width: { xs: "100%", md: "70%" } }}>
      <Box
        sx={{
          minHeight: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#95d2d7",
          padding: "5px 10px",
        }}
      >
        <Typography>Auto Whatsapp Chatbot Service: +91 9374624365</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          padding: ".5em",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: ".9rem" }}>
            Either Text Command -{" "}
            <span style={{ fontWeight: "bold" }}>{textCommand}</span>
          </Typography>
          <Typography sx={{ fontSize: ".9rem" }}>
            Or Numeric Command -{" "}
            <span style={{ fontWeight: "bold" }}>{numericCommand}</span>
          </Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Typography sx={{ fontSize: ".9rem" }}>Or Click - </Typography>
            <Link href={link}>
              <Typography sx={{ fontSize: ".9rem", color: "#0000FF" }}>
                {link}
              </Typography>
            </Link>
          </Box>
          <Typography sx={{ fontSize: ".9rem" }}>
            For Historical Data of 2021-22 - Command:{" "}
            <span style={{ fontWeight: "bold" }}>{historicalDataCommand}</span>
          </Typography>
        </Box>
        <Typography sx={{ fontSize: ".9rem" }}>
          Just Whatsapp above (Either Text or Numeric Command at +91 9374624365
          and get desired Price, News & Historical Data on your whatsapp
          instantly.
        </Typography>
      </Box>
    </Box>
  );
}
