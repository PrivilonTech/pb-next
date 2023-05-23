import React from "react";
import { Box, Typography } from "@mui/material";

import Input from "../Register/Input";

export default function ContactName({ setFirstName, setLastName }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: ".75em", md: 0 },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5em",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Typography>
          First Name <span style={{ color: "red" }}>*</span>
        </Typography>
        <Input type="text" placeholder="e.g: Rohan" setState={setFirstName} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5em",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Typography>
          Last Name <span style={{ color: "red" }}>*</span>
        </Typography>
        <Input type="text" placeholder="e.g: Sinha" setState={setLastName} />
      </Box>
    </Box>
  );
}
