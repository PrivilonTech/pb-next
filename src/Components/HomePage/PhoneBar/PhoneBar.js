import React from "react";
import { Box, Typography } from "@mui/material";

export default function PhoneBar() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#d9232a",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: ".5em 1em",
          flexWrap: "wrap",
          padding: { xs: "5px 20px" },
        }}
      >
        <Typography sx={{ color: "white", fontSize: ".8rem" }}>
          +91 1234567890
        </Typography>
        <Typography sx={{ color: "white", fontSize: ".8rem" }}>
          GST ID : 54ASECS0000F2LS
        </Typography>
        <Typography sx={{ color: "white", fontSize: ".8rem" }}>
          CIN : Z358200MH600PTC525252
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "1em",
          padding: { xs: "5px 20px" },
        }}
      >
        <Typography sx={{ color: "white", fontSize: ".8rem" }}>FAQ</Typography>
        <Typography sx={{ color: "white", fontSize: ".8rem" }}>
          Contact
        </Typography>
        <Typography sx={{ color: "white", fontSize: ".8rem" }}>
          English
        </Typography>
      </Box>
    </Box>
  );
}
