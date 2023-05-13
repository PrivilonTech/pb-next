import React from "react";
import { Box, Typography } from "@mui/material";

import SubscriptionCard from "./SubscriptionCard";
import subscriptionList from "@/menuLists/subscriptionList";

export default function Subscription() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "5em",
          marginBottom: "4em",
          marginTop: "2em",
        }}
      >
        <Typography sx={{ fontSize: "2.75rem", fontWeight: "500" }}>
          Choose your plan
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: "1em",
            margin: "2em",
          }}
        >
          {subscriptionList.map((subscriptionItem) => (
            <SubscriptionCard
              key={subscriptionItem.id}
              data={subscriptionItem}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
