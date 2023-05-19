import React from "react";
import { Box, Typography } from "@mui/material";
import ServicesHeader from "./ServicesHeader";
import { availServices, services } from "@/menuLists/services";

export default function ServicesBlog() {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "2em 0",
      }}
    >
      <Box sx={{ width: "50%", padding: "0 .5em" }}>
        <ServicesHeader />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Typography sx={{ fontSize: ".9rem" }}>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontStyle: "italic",
              }}
            >
              POLYMER <span style={{ color: "#e5322d" }}>BAZAAR</span>
            </span>{" "}
            is a leading information services provider for the Plastics &
            Polymers We offer all news alerts by E-mail, Whatsaap, BBM, SMS,
            auto reply email Alerts along with web Site access at reasonable
            annual subscription.
          </Typography>
          <Typography sx={{ fontSize: ".9rem" }}>
            We are committed to deliver up-to-date information of the highest
            possible quality enriched with accuracy and value to our readers.
            The contents are actively managed on a daily basis by our editorial
            staff from many international & local sources.
          </Typography>
          <Typography sx={{ fontSize: ".9rem" }}>
            We offer premium business and research content in a unique
            combination with powerful databases and search tools for finding
            industry-related information. Plastics manufacturers, Polymer
            traders, importers & known leaders from & within the industry rely
            on the information services provided by your own "
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontStyle: "italic",
              }}
            >
              POLYMER <span style={{ color: "#e5322d" }}>BAZAAR</span>
            </span>{" "}
            " for your daily Purchase/Sale.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "50%", padding: "0 .5em" }}>
        <ServicesHeader />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>Our Services</Typography>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                margin: 0,
                padding: "0 1em",
              }}
            >
              {services.map((item, index) => (
                <li key={index} style={{ fontSize: ".9rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              Different ways to avail our services
            </Typography>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                margin: 0,
                padding: "0 1em",
              }}
            >
              {availServices.map((item, index) => (
                <li key={index} style={{ fontSize: ".9rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
