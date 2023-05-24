import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import Button from "@/Components/Button/Button";
import Input from "@/Components/Register/Input";

export default function AskQuestions() {
  const [email, setEmail] = useState("");

  return (
    <Box
      sx={{
        width: "calc(100% + 4em)",
        height: { xs: "350px", md: "300px" },
        margin: ".75em -2em",
        marginBottom: 0,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          background: "#0f1a2e",
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
            gap: "1.5em",
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
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "1em", sm: "5px" },
            }}
          >
            <Input
              type="text"
              placeholder="Enter your email address"
              setState={setEmail}
              outline
            />
            <Button
              label="Send"
              onClick={() => {}}
              noShadow
              small
              secondaryButton
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#E9E9E9",
          width: { xs: "100%", md: "50%" },
          background: "url(/Services/questions.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      ></Box>
    </Box>
  );
}
