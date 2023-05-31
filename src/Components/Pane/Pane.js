import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

import list from "../../menuLists/paneList";

function Pane({ path, setShowHamburg }) {
  const theme = useTheme();
  const router = useRouter();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(path);
  }, [path]);

  const handleMobileRouteChange = (href) => {
    router.push(href);
    setShowHamburg(false);
  };

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
            gap: "1em",
          }}
        >
          {list.map((res, id) => {
            return (
              <Box
                key={id}
                onClick={() => router.push(`/${res.link}`)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#000",
                  height: "90%",
                  width: "10%",
                  border: "1px solid #bababa",
                  margin: "auto",
                  borderRadius: "20px",
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
                    fontSize: { md: ".8em", lg: ".85rem" },
                    fontWeight: 500,
                    lineHeight: "17px",
                    color: "#121212",
                  }}
                >
                  {res.txt}
                </Typography>
              </Box>
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
            paddingLeft: { xs: "5px", sm: "15px" },
            flexWrap: "wrap",
          }}
        >
          {list.map((res, id) => {
            return (
              <Box
                key={id}
                onClick={() => handleMobileRouteChange(`/${res.link}`)}
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
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
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
}

export default Pane;
