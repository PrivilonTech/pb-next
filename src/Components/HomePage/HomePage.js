import React from "react";
import { Box, Typography } from "@mui/material";
import Pane from "../Pane/Pane";

function HomePage() {
  return (
    <>
      <Box
        sx={{
          height: "70vh",

          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            height: { xs: "60%", md: "100%" },
            border: "2px solid #000",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "70%",
              width: "70%",
              border: "2px solid #000",
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "10vmin", md: "8vmin" },
                fontWeight: "bold",
              }}
            >
              Price
              <br />
              Prediction
              <br />
              Profit
              <br />
            </Typography>
            <Typography
              sx={{
                margin: "auto",
                //fontSize: { xs: "10vmin", md: "8vmin" },

                fontWeight: "bold",
              }}
            >
              The single platform for polymer news and business
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            height: { xs: "40%", md: "100%" },
            border: "2px solid #000",
            display: "flex",
          }}
        >
          <Box
            sx={{
              margin: "auto",
            }}
          >
            <img
              style={{ width: "100%" }}
              src={"./Homepage/welcome.svg"}
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <Pane />
    </>
  );
}

export default HomePage;
