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
        padding: "5px 0",
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
          +91 9375424365
        </Typography>
        <Typography sx={{ color: "white", fontSize: ".8rem" }}>
          GSTIN/UIN : 24ADCPV3612L1ZH
        </Typography>
        <Typography sx={{ color: "white", fontSize: ".8rem" }}>
          Email Id: Info@polymerbazaar.com
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
