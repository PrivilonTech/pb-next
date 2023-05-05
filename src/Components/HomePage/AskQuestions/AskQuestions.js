import React from "react";
import { Box, Typography } from "@mui/material";

import Button from "@/Components/Button/Button";
import Input from "@/Components/Register/Input";

export default function AskQuestions() {
  return (
    <Box
      sx={{
        width: "calc(100% + 4em)",
        height: { xs: "350px", md: "150px" },
        margin: ".75em -2em",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        // border: "1px solid red",
      }}
    >
      {/* 004E86 */}
      <Box
        sx={{
          background: "#c31815",
          height: "100%",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: { xs: "0 2em", md: "0 4em" },
            height: "100%",
          }}
        >
          <Box>
            <Typography sx={{ color: "white", fontSize: "1.2rem" }}>
              Do you have any questions?
            </Typography>
            <Typography sx={{ color: "white", fontSize: ".9rem" }}>
              Register to receive our newsletters with latest industry trends
              and news!
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#E9E9E9",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box
          sx={{
            // border: "2px solid blue",
            display: "flex",
            padding: "2em 0",
            flexDirection: "column",
            justifyContent: "center",
            margin: { xs: "0 2em", md: "0 4em" },
            height: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "1em", sm: "5px" },
            }}
          >
            <Input type="text" placeholder="Enter your email address" outline />
            <Button label="Send" onClick={() => {}} small />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
