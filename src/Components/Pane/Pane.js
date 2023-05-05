import React, { useState, useEffect } from "react";
import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import list from "../../menuLists/paneList";

function Pane({ path }) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(path);
  }, [path]);

  return (
    <>
      {upMd ? (
        <Box
          sx={{
            margin: "0 4em",
            height: "15vh",
            display: "flex",
            justifyContent: "space-evenly",
            padding: "1em",
            paddingBottom: 0,
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
                  border: "1px solid #d5d9eb",
                  margin: "auto",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  padding: ".5em",
                  background: "white",
                  transform: active === res.link ? "scale(1.05)" : "scale(1)",
                  boxShadow:
                    active === res.link
                      ? "rgba(0, 0, 0, 0.16) 0px 3px 20px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                      : "20px 20px 60px #bebebe -20px -20px 60px #ffffff",
                  "&:hover": {
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 20px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                    transform: "scale(1.05)",
                  },
                  transition:
                    "boxShadow 150ms ease-in, transform 150ms ease-in",
                }}
              >
                <Box
                  sx={{
                    margin: "auto",
                  }}
                >
                  <Image height={40} width={40} src={res.icon} alt={res.txt} />
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
            height: { xs: "75%", sm: "80%" },
            display: "flex",
            justifyContent: "flex-start",
            gap: 0,
            paddingLeft: { xs: "5px", sm: "10px" },
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
                  width: { xs: "20%", sm: "25%" },
                  padding: { xs: ".75em", sm: ".5em" },
                  lineHeight: "1px",
                  border:
                    active === res.link ? "1px solid red" : "2px solid #d5d9eb",
                  margin: "10px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  background: "white",
                  boxShadow:
                    active === res.link
                      ? "rgba(0, 0, 0, 0.16) 0px 3px 20px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                      : "20px 20px 60px #bebebe -20px -20px 60px #ffffff",
                  "&:hover": {
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 3px 20px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                    transform: "scale(1.05)",
                  },
                  transition:
                    "boxShadow 150ms ease-in, transform 150ms ease-in",
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
                    fontSize: ".75rem",
                  }}
                >
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
