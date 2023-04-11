import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Pane() {
  const list = [
    {
      id: 1,
      icon: "./Pane/home.svg",
      txt: "Home",
    },
    {
      id: 2,
      icon: "./Pane/news.svg",
      txt: "News",
    },
    {
      id: 3,
      icon: "./Pane/crude.svg",
      txt: "Crude Feedstock",
    },
    {
      id: 4,
      icon: "./Pane/global.svg",
      txt: "Global Bazaar",
    },
    {
      id: 5,
      icon: "./Pane/indian.svg",
      txt: "Indian Bazaar",
    },
    {
      id: 6,
      icon: "./Pane/graph.svg",
      txt: "Graph",
    },
    {
      id: 7,
      icon: "./Pane/future.svg",
      txt: "Future Trend",
    },
    {
      id: 8,
      icon: "./Pane/services.svg",
      txt: "Services",
    },
  ];
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          width: "90vw",
          height: "15vh",
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
        }}
      >
        {list.map((res, id) => {
          return (
            <Box
              sx={{
                height: "90%",
                width: "10%",
                border: "1px solid #000",
                margin: "auto",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                }}
              >
                <Image height={45} width={45} src={res.icon} alt={res.txt} />
              </Box>
              <Typography sx={{ margin: "auto" }}>{res.txt}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Pane;
