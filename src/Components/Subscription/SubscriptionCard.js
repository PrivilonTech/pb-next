import React from "react";
import { Box, Typography } from "@mui/material";

export default function SubscriptionCard({ data, amount, setAmount }) {
  return (
    <Box
      onClick={() => setAmount(data.subscriptionAmount)}
      sx={{
        // width: { xs: "70vw", sm: "80vw", lg: "300px" },
        width: "100%",
        border: "2px solid #bcc0d1",
        borderRadius: "15px",
        padding: "2em",
        cursor: "pointer",
        "&:hover": {
          border:
            amount === data.subscriptionAmount
              ? "2px solid black"
              : "2px solid #797b85",
        },
        transition: "border 150ms ease-in",

        transform: amount === data.subscriptionAmount && {
          lg: "translateY(-5px)",
        },
        border:
          amount === data.subscriptionAmount
            ? "2px solid black"
            : "2px solid #bcc0d1",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* type and amount */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, color: "#28282b" }}
            >
              {data.subscriptionType}
            </Typography>
            <Box sx={{ display: "flex", gap: ".25em", alignItems: "center" }}>
              <Typography sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
                ₹{data.subscriptionAmount}+
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
