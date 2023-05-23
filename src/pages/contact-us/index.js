import React from "react";
import { Box } from "@mui/material";

import ContactHero from "@/Components/ContactUs/ContactHero";
import ContactForm from "@/Components/ContactUs/ContactForm";

export default function index() {
  return (
    <Box
      sx={{
        margin: "2em 0",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
    >
      <ContactHero />
      <ContactForm />
    </Box>
  );
}
