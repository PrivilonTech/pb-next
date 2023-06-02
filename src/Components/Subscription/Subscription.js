import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import FlipNumbers from "react-flip-numbers";

import SubscriptionCard from "./SubscriptionCard";
import subscriptionList from "@/menuLists/subscriptionList";
import Button from "../Button/Button";
import AccordionComponent from "./Accordion";

export default function Subscription() {
  const [amount, setAmount] = useState(0);
  const [selected, setSelected] = useState([]);

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
            fontSize: { xs: "2rem", md: "3.25rem" },
            fontWeight: "500",
            textAlign: "center",
            mt: { xs: "1.75rem" },
            color: "#1e1e1e",
            textTransform: "uppercase",
          }}
        >
          Subscription
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "2em", md: 0 },
            justifyContent: "space-between",
            m: { xs: "0 2em", md: "0 8em" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: "80px",
              }}
            >
              <Typography
                sx={{
                  fontSize: ".9rem",
                  textTransform: "uppercase",
                  color: "#e5322d",
                  fontWeight: "bold",
                }}
              >
                welcome to polymer bazaar!
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "2rem", sm: "3rem" },
                  fontWeight: "500",
                  color: "#1e1e1e",
                }}
              >
                Select Your Plan
              </Typography>
              <AccordionComponent />
              <Box sx={{ display: "flex", gap: ".5em" }}>
                <Typography sx={{ fontSize: "2rem", color: "#1e1e1e" }}>
                  Your Total:
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <Typography sx={{ fontSize: "1.5rem" }}>₹</Typography>
                  <FlipNumbers
                    height={26}
                    width={20}
                    play
                    perspective={200}
                    numbers={amount.toString()}
                  />
                </Box>
              </Box>
            </Box>
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
                data={subscriptionItem}
                setAmount={setAmount}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
            <Box
              sx={{
                width: "100%",
                mt: "2em",
              }}
            >
              <Button label="Continue" onClick={handleSubscription} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
