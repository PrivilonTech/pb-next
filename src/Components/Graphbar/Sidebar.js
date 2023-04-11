import { Box, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function Sidebar({ path }) {
  console.log(path);
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(path);
  }, [path]);

  const list = [
    {
      id: 1,
      section: "Naptha",
      slug: "naptha",
    },
    {
      id: 2,
      section: "Propylene",
      slug: "propylene",
    },
    {
      id: 3,
      section: "Ethylene",
      slug: "ethylene",
    },
    {
      id: 4,
      section: "VCM & EDC",
      slug: "vcm&edc",
    },
    {
      id: 5,
      section: "Steryne",
      slug: "steryne",
    },
    {
      id: 6,
      section: "PTA",
      slug: "pta",
    },
    {
      id: 7,
      section: "Flow Chart",
      slug: "flow-chart",
    },
  ];
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: { xs: "200vw", md: "100%" },
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          justifyContent: "space-around",
        }}
      >
        {list.map((res, id) => {
          return (
            <Link
              href={`/crude/${res.slug}`}
              key={id}
              sx={{
                textDecoration: "none",
                color: active === res.slug ? "#fff" : "#000",
                width: { md: "100%" },
                height: { xs: "60%", md: "6%" },
                background: active === res.slug ? "#D9232A" : "",
                border:
                  active === res.slug ? "2px solid #D9232A" : "2px solid #000",
                display: "flex",
                margin: { xs: "10px" },

                borderRadius: { xs: "20px" },
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <Typography
                sx={{
                  margin: "auto",
                  textAlign: "center",
                  px: { xs: "15px", md: "" },
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
