import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography, CardActionArea } from "@mui/material";

const ComingSoon = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", px: "2rem", py: "4rem" }}
    >
      <Card sx={{ maxWidth: 600 }}>
        <CardActionArea>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Dear Guest,
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are currently enhancing our website with the latest features,
              and during this period, access to the site will be limited. We
              apologize for any inconvenience this may cause.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              For immediate assistance, please don't hesitate to reach out to
              our customer care team at{" "}
              <a
                style={{
                  color: "blue",
                }}
                href="tel:+91 93754 24 365"
              >
                +91 93754 24 365
              </a>{" "}
              or send an email to{" "}
              <a href="mailto:info@polymerbazaar.com">info@polymerbazaar.com</a>
              .
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Thank you for your understanding.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Team  <br /> PolymerBazaar
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ComingSoon;
