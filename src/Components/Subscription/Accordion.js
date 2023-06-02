import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

import { questions } from "@/menuLists/subscriptionList";

export default function AccordionComponent() {
  return (
    <Box sx={{ width: { xs: "100%", md: "90%" }, m: "1em 0" }}>
      {questions.map((section) => (
        <Accordion
          key={section.id}
          disableGutters
          sx={{
            boxShadow: "rgb(0, 0, 0) 0px 0px 0px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: ".9rem", color: "#1e1e1e" }}>
              {section.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: ".9rem", color: "#6b6a68" }}>
              {section.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
