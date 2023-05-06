import { Box, Typography } from "@mui/material";
import React from "react";
import headList from "../../menuLists/footerList";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          height: { xs: "100vh", md: "50vh" },
          width: { xs: "100%", md: "100%" },
          background: "#e9e9e9",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "70%",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: { xs: "0 2em", sm: "0 4em", md: "0 auto" },
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
                        fontSize: { xs: "5vmin", md: "3.5vmin" },
                        color: "#787878",
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
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    {res.list.map((ans, id) => {
                      return (
                        <Typography
                          key={id}
                          id={ans.id}
                          sx={{ color: "#787878" }}
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
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                marginTop: "20px",
                marginLeft: { xs: "4vw", md: "0vw" },
                width: { xs: "40em", sm: "50em", lg: "70em" },
                fontSize: ".9rem",
                color: "#787878",
              }}
            >
              Please refer Terms & Conditions : M/S SAMYAK ENTERPRISE,
              Ahmedabad, Gujarat, India. +91 93 745 24 365 All Copyright ©2007 -
              2021 reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
