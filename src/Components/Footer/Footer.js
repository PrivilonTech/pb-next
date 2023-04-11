import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  const headList = [
    {
      id: 1,
      txt: "Company",
      list: [
        {
          id: 1,
          name: "Blog",
        },
        {
          id: 2,
          name: "About Us",
        },
        {
          id: 3,
          name: "Job Openings",
        },
        {
          id: 4,
          name: "Privacy Policy",
        },
      ],
    },
    {
      id: 2,
      txt: "Community",
      list: [
        {
          id: 1,
          name: "Another ",
        },
        {
          id: 2,
          name: "About Us",
        },
        {
          id: 3,
          name: "Job Openings",
        },
        {
          id: 4,
          name: "Privacy Policy",
        },
      ],
    },
    {
      id: 3,
      txt: "Categories",
      list: [
        {
          id: 1,
          name: "Blog",
        },
        {
          id: 2,
          name: "About Us",
        },
        {
          id: 3,
          name: "Job Openings",
        },
        {
          id: 4,
          name: "Privacy Policy",
        },
      ],
    },
    {
      id: 4,
      txt: "Contact Us",
      list: [
        {
          id: 1,
          name: "Blog",
        },
        {
          id: 2,
          name: "About Us",
        },
        {
          id: 3,
          name: "Job Openings",
        },
        {
          id: 4,
          name: "Privacy Policy",
        },
      ],
    },
  ];

  return (
    <>
      <Box></Box>
      <Box
        sx={{
          height: { xs: "100vh", md: "60vh" },
          width: { xs: "100%", md: "80%" },
          margin: "auto",
        }}
      >
        <Box
          sx={{
            height: "80%",
            borderBottom: "2px solid #000",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {headList.map((res, id) => {
            return (
              <>
                <Box
                  sx={{
                    height: { xs: "50%", md: "90%" },
                    width: { xs: "40%", md: "20%" },

                    margin: "auto",
                  }}
                >
                  <Box
                    sx={{
                      height: "20%",
                      display: "flex",
                    }}
                  >
                    <Typography
                      sx={{
                        marginTop: { xs: "20px" },
                        textAlign: "left",
                        fontSize: { xs: "5vmin", md: "3vmin" },
                        color: "#657786",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      {res.txt}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: "80%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    {res.list.map((ans) => {
                      return <Typography sx={{}}>{ans.name}</Typography>;
                    })}
                  </Box>
                </Box>
              </>
            );
          })}
        </Box>
        <Box
          sx={{
            height: "20%",
            display: "flex",
            flexDirection: { xs: "column", md: "raw" },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "60%" } }}>
            <Typography sx={{ marginTop: "20px" }}>
              Please refer Terms & Conditions : M/S SAMYAK ENTERPRISE,
              Ahmedabad, Gujarat, India. +91 93 745 24 365 All Copyright ©2007 -
              2021 reserved.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "4   0%" } }}></Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
