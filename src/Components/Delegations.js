import { Box, Typography } from "@mui/material";

export const CovidImpactDelegation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5em",
        padding: "3em",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "2em",
          fontWeight: "bold",
          color: "#ef6b67",
        }}
      >
        COVID IMPACT
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <Typography sx={{ color: "#1e1e1e" }}>
          Due to the widespread and devastating impact of the COVID-19 pandemic,
          show exhibitions worldwide faced unprecedented challenges, leading to
          the postponement or outright cancellation of numerous scheduled
          editions. The global scenario dictated a significant shift in plans
          for conferences and exhibitions.
        </Typography>
        <Typography sx={{ color: "#1e1e1e" }}>
          Adding to the complexity, the world witnessed a reluctance towards
          international travel, with the anticipation that foreign passenger
          movement would remain subdued even after the gradual easing of COVID
          restrictions. This hesitancy was compounded by the uncertainties
          surrounding the design and implementation of COVID protocols for
          international travel.
        </Typography>
        <Typography sx={{ color: "#1e1e1e" }}>
          Throughout 2020 and 2021, the global exhibition landscape remained
          dormant, and as a consequence, Polymer Bazaar found itself unable to
          facilitate the participation of VIP delegations in any industry events
          during this period. The absence of these gatherings had a notable
          impact on the networking and collaborative opportunities that such
          exhibitions traditionally offer. The unprecedented circumstances of
          the pandemic necessitated a reevaluation of strategies for engagement
          and highlighted the need for adaptability in navigating the evolving
          landscape of international business interactions.
        </Typography>
      </Box>
    </Box>
  );
};
