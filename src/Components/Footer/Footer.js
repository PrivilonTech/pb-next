import React from "react";
import { Box, Typography } from "@mui/material";

import { footerLinks, footerList } from "@/menuLists/footerList";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#d9232a",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", sm: "space-evenly" },
          flexWrap: "wrap",
          padding: { xs: "3em 2em", sm: "3em 0" },
          gap: { xs: "1em", sm: 0 },
        }}
      >
        {footerList.map((item) => (
          <Box
            ley={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".5em",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                margin: "5px 0",
                color: "white",
              }}
            >
              {item.columnTitle}
            </Typography>
            {item.columnSection.map((section) => (
              <Box
                key={section.id}
                sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}
              >
                <Typography sx={{ fontSize: "1.1rem", color: "whitesmoke" }}>
                  {section.title}
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}
                >
                  {section.text.map((display) => (
                    <Link key={display.id} href={display.href}>
                      <Typography sx={{ fontSize: ".9rem", color: "#d2d6d4" }}>
                        {display.placeholder}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          pb: "1.5em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: "1em", sm: "2em" },
          }}
        >
          {footerLinks.map((footerLinks) => (
            <Link key={footerLinks.id} href={footerLinks.href}>
              <Typography sx={{ fontSize: ".8rem", color: "#d2d6d4" }}>
                {footerLinks.label}
              </Typography>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: ".8rem",
              color: "#d2d6d4",
              maxWidth: { xs: "80%", md: "100%" },
            }}
          >
            Please refer Terms & Conditions : M/S SAMYAK ENTERPRISE, Ahmedabad,
            Gujarat, India. +91 93 745 24 365 All Copyright ©2007 - 2021
            reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
