import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

function Sidebar({ path, list, page }) {
  const [active, setActive] = useState("");
  const router = useRouter();

  useEffect(() => {
    setActive(path);
  }, [path]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { lg: "space-around" },
        }}
      >
        {list.map((res, id) => {
          return (
            <Box
              onClick={() => router.push(`/${page}/${res.slug}`)}
              key={id}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                color: active === res.slug ? "whitesmoke" : "#575757",
                width: { md: "90%" },
                background: active === res.slug ? "#D9232A" : "",
                display: "flex",
                margin: { xs: "10px", md: "10px 0" },

                border:
                  active === res.slug ? "2px solid #D9232A" : "2px solid gray",
                borderRadius: { xs: "20px", md: "0px" },
                borderTopLeftRadius: { md: "20px" },
                borderBottomLeftRadius: { md: "20px" },

                "&:hover": {
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 20px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                  transform: "scale(1.005)",
                },
                transition: "boxShadow 150ms ease-in, transform 150ms ease-in",
                boxShadow:
                  active === res.slug
                    ? "rgba(0, 0, 0, 0.16) 0px 3px 20px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    : "20px 20px 60px #bebebe -20px -20px 60px #ffffff",
              }}
            >
              <Typography
                sx={{
                  margin: "auto",
                  textAlign: "center",
                  padding: "5px 0",
                  px: { xs: "15px", md: "" },
                  fontSize: { xs: ".9rem", md: "1rem" },
                  fontWeight: "500",
                }}
              >
                {res.section}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Sidebar;
