import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import Button from "@/Components/Button/Button";

export default function FuturePolymer() {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: { xs: "80vh", md: "40vh" },
        width: "85vw",

        margin: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/Homepage/image_2.jpg)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "#fff",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "45%",
          left: "37%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Typography
          sx={{
            marginBottom: "20px",
            fontWeight: "500",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Empower your future polymer decisions
        </Typography>
        <Typography>
          Monitor and capture the complexity of changing polymer markets with
          consolidated and forward-looking view of global markets.
        </Typography>
        <Box sx={{ mt: "1em" }}>
          <Button
            label="View Market"
            outline
            small
            onClick={() => router.push("/global-bazaar")}
          />
        </Box>
      </Box>
    </Box>
  );
}
