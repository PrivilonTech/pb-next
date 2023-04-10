import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Box
        sx={{
          height: "70vh",
          border: "2px solid #000",
          display: "flex",
        }}
      >
        <Box sx={{ width: "40%", border: "2px solid #000" }}>
          <Box>
            <Typography></Typography>
          </Box>
        </Box>
        <Box sx={{ width: "60%", margin: "auto" }}>
          <Box
            sx={{
              margin: "auto",
            }}
          >
            <img src={"./Homepage/welcome.svg"} alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
