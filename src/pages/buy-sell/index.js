import Link from "next/link";
import React from "react";
import { Box, Typography } from "@mui/material";

import ScrollTop from "@/Components/HomePage/ScrollTop/ScrollTop";
import TwitterBlogs from "@/Components/HomePage/DataDisplay/TwitterBlogs";
import BuySellTable from "@/Components/HomePage/DataDisplay/BuySellTable";

export default function News() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          flexDirection: { xs: "column-reverse", lg: "row" },
          margin: { xs: "2em", md: "3em 3em" },
          gap: "1em",
          overflowX: "auto",
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "70%" } }}>
          <BuySellTable />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "2em", md: "0" },
            width: { xs: "100%", lg: "30%" },
          }}
        >
          <ScrollTop />
          <TwitterBlogs wideScreen screenName="ResinBazaar" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: { xs: "2em", md: "3em 5em" },
        }}
      >
        <Link
          href="https://whatsapp.com/channel/0029Va5RanSA89MnUeSOzX2q"
          target="_blank"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5em",
            color: "#1e1e1e",
            borderRadius: "10px",
            background: "#e5e5e5",
            padding: ".5em 1em",
          }}
        >
          <Typography sx={{ display: "inline-block" }}>
            Join our WhatsApp channel
          </Typography>
          <img src="/Homepage/socials/whatsapp.png" height={20} />
        </Link>
      </Box>
    </>
  );
}
