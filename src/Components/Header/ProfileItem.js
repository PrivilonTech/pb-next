import { Box, Typography } from "@mui/material";
import React from "react";

export default function ProfileItem({ text, icon: Icon, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        gap: "1em",
        cursor: "pointer",
        padding: "1em",
        borderRadius: "10px",
        "&:hover": {
          background: "#faf5f5",
        },
        transition: "background 150ms ease-in",
      }}
    >
      <Icon sx={{ color: "#474646" }} />
      <Typography sx={{ color: "#474646" }}>{text}</Typography>
    </Box>
  );
}
