import { Box, Typography } from "@mui/material";

export default function EmptyData() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography>Dear Visitor,</Typography>
      <Typography>
        The data you seek might be classified within the realm of historical
        records, or the webpage may presently be undergoing synchronization.
      </Typography>
      <Typography>
        We extend a cordial invitation to explore the capabilities of our
        AI-driven chatbot on WhatsApp. A simple greeting of HI to{" "}
        <a href="tel:+919374624365">+91 93746 24 365</a> initiates this seamless
        experience.
      </Typography>
      <Typography>
        For further elucidation, please don't hesitate to reach out to us via
        phone at
        <a href="tel:+919374624365">+91 93746 24 365</a> or through email at{" "}
        <a href="mail:info@PolymerBazaar.com">info@PolymerBazaar.com</a>. We
        extend a cordial invitation to explore the capabilities of our AI-driven
        chatbot on WhatsApp. A simple greeting of HI to{" "}
        <a href="tel:+919374624365">+91 93746 24 365</a> initiates this seamless
        experience.
      </Typography>
      <Typography>
        We express our gratitude for your perusal of PolymerBazaar. Sincerely at
        your services 24 Hours 365 Days.
      </Typography>
    </Box>
  );
}
