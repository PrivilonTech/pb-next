import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { toast } from "react-hot-toast";

import SubscriptionCard from "./SubscriptionCard";
import subscriptionList from "@/menuLists/subscriptionList";
import Button from "../Button/Button";

export default function Subscription() {
  const [amount, setAmount] = useState(0);

  const handleSubscription = () => {
    if (amount === 0) {
      return toast.error("Please select a subscription plan.");
    }

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
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "2em", md: 0 },
            justifyContent: "space-between",
            m: "0 2em",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/Services/subscribe.webp"
              sx={{
                height: { xs: "90%", md: 400 },
                width: { xs: "90%", md: 500 },
                position: "sticky",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                top: "80px",
              }}
              alt="Subcription"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "2em",
              width: { xs: "100%", md: "40%" },
              flexWrap: "wrap",
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
            <Box
              sx={{
                width: "100%",
                mt: "2em",
              }}
            >
              <Button label="Proceed" onClick={handleSubscription} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
