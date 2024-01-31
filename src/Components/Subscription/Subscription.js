import Balancer from "react-wrap-balancer";
import { Box, Typography } from "@mui/material";

import SubscriptionCard from "./SubscriptionCard";
import subscriptionList from "@/menuLists/subscriptionList";

export default function Subscription() {
  return (
    <Box
      sx={{
        height: "90vh",
        paddingTop: "10vh",
        display: "flex",
        flexDirection: "column",
        gap: "3.5em",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "500", fontSize: "2.75em" }}>
          Subscribe to <span style={{ color: "#C31815" }}>PolymerBazaar</span>
        </Typography>
        <Balancer>
          <Typography
            style={{ color: "gray", textAlign: "center", width: "50em" }}
          >
            We want to empower builders of all sizes to create beautiful
            interfaces; from individuals to big enterprises, we have a plan that
            fits just what you need.
          </Typography>
        </Balancer>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "40px",
          alignItems: "center",
          height: "100%",
          mb: "2em",
        }}
      >
        {subscriptionList.LIST_OF_TIERS.map((tier, index) => (
          <SubscriptionCard key={index} tier={tier} />
        ))}
      </Box>
    </Box>
  );
}
