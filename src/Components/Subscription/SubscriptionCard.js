import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Box, Typography } from "@mui/material";
import Button from "../Button/Button";

export default function SubscriptionCard({ data }) {
  return (
    <Box
      sx={{
        minHeight: "450px",
        width: { xs: "70vw", sm: "80vw", lg: "300px" },
        border: "2px solid #d5d9eb",
        borderRadius: "10px",
        padding: "2em",

        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",

        transform: data?.mostPopular && { lg: "translateY(-50px)" },

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          {/* type and amount */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.75rem", color: "#28282b" }}>
              {data.subscriptionType}
            </Typography>
            <Box sx={{ display: "flex", gap: ".25em", alignItems: "center" }}>
              <Typography sx={{ fontSize: "2.25rem", fontWeight: "bold" }}>
                {data.subscriptionAmount}
              </Typography>
              {data.subscriptionAmount !== "Custom" && (
                <Typography
                  sx={{
                    color: "#cacacc",
                    fontWeight: "bold",
                    fontSize: ".8rem",
                  }}
                >
                  / MO
                </Typography>
              )}
            </Box>
          </Box>

          {/* Benefits */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".5em",
            }}
          >
            {data.subscriptionBenefits.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: ".5em",
                }}
              >
                <DoneIcon sx={{ color: "#4bb543" }} />
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* BUTTON */}
      <Box>
        <Button label="GET STARTED" onClick={() => {}} />
      </Box>
    </Box>
  );
}
