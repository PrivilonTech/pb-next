import { Box, Typography } from "@mui/material";
import React from "react";
import headList from "../../menuLists/footerList";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          height: { xs: "100vh", md: "50vh" },
          width: { xs: "100%", md: "80%" },
          margin: { md: "auto" },
        }}
      >
        <Box
          sx={{
            height: "80%",
            borderBottom: "1px solid gray",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {headList.map((res, id) => {
            return (
              <React.Fragment key={id}>
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
                    }}
                  >
                    <Typography
                      sx={{
                        marginTop: { xs: "20px" },
                        textAlign: "left",
                        fontSize: { xs: "5vmin", md: "3vmin" },
                        color: "#657786",
                        fontWeight: "bold",
                      }}
                    >
                      {res.txt}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: "70%",
                      display: "flex",
                      marginTop: ".5em",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    {res.list.map((ans, id) => {
                      return (
                        <Typography
                          key={id}
                          id={ans.id}
                          sx={{ color: "#878997" }}
                        >
                          {ans.name}
                        </Typography>
                      );
                    })}
                  </Box>
                </Box>
              </React.Fragment>
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
          <Box sx={{ width: { xs: "100%", md: "61%" } }}>
            <Typography
              sx={{
                marginTop: "20px",
                marginLeft: { xs: "4vw", md: "0vw" },
                fontSize: ".9rem",
                color: "#575757",
              }}
            >
              Please refer Terms & Conditions : M/S SAMYAK ENTERPRISE,
              Ahmedabad, Gujarat, India. +91 93 745 24 365 All Copyright ©2007 -
              2021 reserved.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "40%" } }}></Box>
        </Box>
      </Box>
    </>
  );
}
