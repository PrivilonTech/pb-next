import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

import list from "../../menuLists/paneList";
import NavDropDownContainer from "../DropDown/NavDropdown";

function Pane({ path, setShowHamburg }) {
  const theme = useTheme();
  const router = useRouter();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(router.asPath);
  }, [router.asPath]);

  const handleMobileRouteChange = (href) => {
    router.push(href);
    setShowHamburg(false);
  };

  return (
    <>
      {upMd ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "1em",
            background: "#e5e5e5",
            gap: "1em",
          }}
        >
          {list.map((res, index) => (
            <NavDropDownContainer
              key={res.id}
              lastContainer={list.length - 1 === index}
              content={res}
            />
          ))}
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
            const isActive = active === res.link;

            return (
              <Box
                key={id}
                onClick={() => handleMobileRouteChange(res.link)}
                sx={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#000",
                  height: "20%",
                  width: { xs: "20%", sm: "25%" },
                  padding: { xs: ".5em .75em", sm: ".5em" },
                  lineHeight: "1px",
                  border: isActive ? "1px solid red" : "2px solid #d5d9eb",
                  margin: "10px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  background: "white",
                  boxShadow: isActive
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
