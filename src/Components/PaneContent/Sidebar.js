import React, { useEffect, useState } from "react";
import { Box, Link, Typography } from "@mui/material";

function Sidebar({ path, list, page }) {
  const [active, setActive] = useState("");

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
            <Link
              href={`/${page}/${res.slug}`}
              key={id}
              sx={{
                textDecoration: "none",
                color: active === res.slug ? "#fff" : "#575757",
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
                },
                transition: "boxShadow 150ms ease-in",
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
                  fontWeight: "600",
                }}
              >
                {res.section}
              </Typography>
            </Link>
          );
        })}
      </Box>
    </>
  );
}

export default Sidebar;
