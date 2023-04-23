import React, { useState, useEffect } from "react";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import list from "../../../menuLists/paneList";

function Pane({ path, show }) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const [showpane, setShowpane] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(path);
  }, [path]);

  return (
    <>
      {upMd ? (
        <Box
          sx={{
            margin: "1em auto",
            width: "90vw",
            height: "15vh",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {list.map((res, id) => {
            return (
              <Link
                key={id}
                href={res.link}
                sx={{
                  textDecoration: "none",
                  color: "#000",
                  height: "90%",
                  width: "10%",
                  border:
                    active === res.link
                      ? "2px solid #C31815"
                      : "1px solid #1e1e1e",
                  margin: "auto",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:
                    " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                }}
              >
                <Box
                  sx={{
                    margin: "auto",
                  }}
                >
                  <Image height={45} width={45} src={res.icon} alt={res.txt} />
                </Box>
                <Typography
                  sx={{
                    margin: "auto",
                    textAlign: "center",
                    fontSize: { md: ".8em", lg: ".9rem" },
                    fontWeight: 500,
                    color: "#121212",
                  }}
                >
                  {res.txt}
                </Typography>
              </Link>
            );
          })}
        </Box>
      ) : (
        <Box
          sx={{
            margin: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {list.map((res, id) => {
            return (
              <Link
                key={id}
                href={res.link}
                sx={{
                  textDecoration: "none",
                  color: "#000",
                  height: "20%",
                  width: "35%",
                  border:
                    active === res.link ? "1px solid red" : "1px solid #141414",
                  margin: "10px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow:
                    " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  // boxShadow:
                  //   "-6px -6px 12px rgba(255, 255, 255, 0.51), 6px 6px 12px rgba(0, 0, 0, 0.08)",
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
      )}
    </>
  );
}

export default Pane;
