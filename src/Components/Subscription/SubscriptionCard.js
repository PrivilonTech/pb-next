import React from "react";
import { Box, Typography } from "@mui/material";

export default function SubscriptionCard({
  data,
  setAmount,
  selected,
  setSelected,
}) {
  const alreadySelected = selected.includes(data.id);

  const handleSetAmount = () => {
    if (alreadySelected) {
      setAmount((prev) => prev - data.subscriptionAmount);
      setSelected(selected.filter((element) => element !== data.id));
    } else {
      setAmount((prev) => prev + data.subscriptionAmount);
      setSelected((prev) => [...prev, data.id]);
    }
  };

  return (
    <Box
      key={data.id}
      onClick={handleSetAmount}
      sx={{
        width: "100%",
        borderRadius: "8px",
        padding: "1.5em",
        cursor: "pointer",
        "&:hover": {
          background: "#f5f2f2",
        },
        transition: "background 150ms ease-in",
        border: alreadySelected ? "2.5px solid #adaaaa" : "2.5px solid white",

        boxShadow: "rgba(0, 0, 0, 0.4) 0px 1px 4px",

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
