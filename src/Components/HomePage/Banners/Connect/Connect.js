import React from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

import Button from "@/Components/Button/Button";

export default function Connect() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "0em", md: 0 },
        height: { xs: "650px", md: "450px" },
        margin: "0 -2em",
      }}
    >
      <Box
        sx={{
          background: "#E9E9E9",
          width: { xs: "100%", md: "50%" },
          padding: { xs: "1.75em 0", md: 0 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <Box
          sx={{
            m: "5px 0",
            display: "flex",
            flexDirection: "column",
            gap: ".25em",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 400,
              padding: { xs: "0 1em", md: "0 2em" },
            }}
          >
            Speak to us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".5em",
              padding: { xs: "0 2em", md: "0 4em" },
            }}
          >
            <Typography sx={{ fontSize: ".9rem", width: "90%" }}>
              Now more than ever, dynamic insights are key to navigating
              complex, volatile commodity markets. Access to expert insights on
              the latest industry developments and tracking market changes are
              vital in making sustainable business decisions.
            </Typography>
            <Typography sx={{ fontSize: ".9rem", width: "90%" }}>
              Want to learn about how we can work together to bring you
              actionable insight and support your business decisions?
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            padding: { xs: "0 2em", md: "0 4em" },
            width: "50%",
          }}
        >
          <Button
            label="Connect"
            onClick={() => router.push("/contact-us")}
            secondaryButton
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100%",
          background: "url(/Services/speak-to-us.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      ></Box>
    </Box>
  );
}
