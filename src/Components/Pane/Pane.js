import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

function Pane({ path }) {
  const router = useRouter();
  const theme = useTheme();

  const udMd = theme.breakpoints.up("md");

  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(path);
  }, [path]);

  const list = [
    {
      id: 1,
      icon: "/Pane/home.svg",
      txt: "Home",
      link: "/",
    },
    {
      id: 2,
      icon: "/Pane/news.svg",
      txt: "News",
      link: "/news",
    },
    {
      id: 3,
      icon: "/Pane/crude.svg",
      txt: "Crude & Feedstock",
      link: "/crude",
    },
    {
      id: 4,
      icon: "/Pane/global.svg",
      txt: "Global Bazaar",
      link: "/global-bazaar",
    },
    {
      id: 5,
      icon: "/Pane/indian.svg",
      txt: "Indian Bazaar",
      link: "/indian-bazaar ",
    },
    {
      id: 6,
      icon: "/Pane/graph.svg",
      txt: "Graph",
      link: "/graph",
    },
    {
      id: 7,
      icon: "/Pane/future.svg",
      txt: "Future Trend",
      link: "/future-trend",
    },
    {
      id: 8,
      icon: "/Pane/services.svg",
      txt: "Services",
      link: "/services",
    },
  ];
  return (
    <>
      {udMd ? (
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
              <Link
                href={res.link}
                sx={{
                  textDecoration: "none",
                  color: "#000",
                  height: "90%",
                  width: "10%",
                  border:
                    active === res.link ? "1px solid red" : "1px solid #141414",
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
                <Typography sx={{ margin: "auto", textAlign: "center" }}>
                  {res.txt}
                </Typography>
              </Link>
            );
          })}
        </Box>
      ) : (
        <Box></Box>
      )}
    </>
  );
}

export default Pane;
