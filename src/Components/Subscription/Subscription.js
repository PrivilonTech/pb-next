import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { toast } from "react-hot-toast";

import SubscriptionCard from "./SubscriptionCard";
import subscriptionList from "@/menuLists/subscriptionList";
import Button from "../Button/Button";

export default function Subscription() {
  const [amount, setAmount] = useState(0);

  const handleSubscription = () => {
    // TODO: Subscription Razorpay
    toast.success(`Subscription Amount : ${amount}`);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "2rem", md: "4em" },
          marginBottom: "4em",
          marginTop: "2em",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2.25rem", md: "3.25rem" },
            fontWeight: "500",
            textAlign: "center",
            mt: { xs: "1.75rem" },
          }}
        >
          Choose your plan
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "2em",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {subscriptionList.map((subscriptionItem) => (
            <SubscriptionCard
              key={subscriptionItem.id}
              data={subscriptionItem}
              amount={amount}
              setAmount={setAmount}
            />
          ))}
          <Box sx={{ width: { xs: "70%", md: "50%" }, mt: "2em" }}>
            <Button label="Proceed" onClick={handleSubscription} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
