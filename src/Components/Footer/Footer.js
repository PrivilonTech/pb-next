import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

import { footerLinks, footerList } from "@/menuLists/footerList";
import SocialLinks from "../HomePage/Sidebar/SocialLinks";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#f5f5f5",
        boxShadow: "#c31815 0px 5px 10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-around",
          margin: { xs: "0 0em", sm: "0 3em" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2em",
            padding: { xs: "1em 2em", sm: "1em 2em" },
            width: { xs: "80%", lg: "50%" },
            alignItems: "flex-start",
            m: { lg: "1em 0" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Box sx={{ height: 80, width: 80, position: "relative" }}>
              <img
                src={"/Header/logo_new.svg"}
                alt="Logo"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                  left: "-1em",
                  height: "100%",
                  width: "100%",
                }}
              />
            </Box>
            <Typography
              sx={{
                color: "#1e1e1e",
                fontSize: ".9rem",
                width: { xs: "100%", md: "80%", mt: "-0.5em" },
              }}
            >
              Unlock valuable insights and make informed business decisions with
              our comprehensive and up-to-date polymer price index.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                color: "#c31815",
                textAlign: { xs: "left", sm: "center" },
              }}
            >
              Connect with Polymer Bazaar
            </Typography>
            <SocialLinks />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              padding: { xs: "1em 2em", sm: "0 2em", lg: "1em 2em" },
              gap: { xs: "1em", sm: "2em" },
            }}
          >
            {footerList.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5em",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.75rem",
                    margin: "5px 0",
                    color: "#c31815",
                  }}
                >
                  {item.columnTitle}
                </Typography>
                {item.columnSection.map((section) => (
                  <Box
                    key={section.id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".5em",
                    }}
                  >
                    <Typography sx={{ fontSize: "1.2rem", color: "#1e1e1e" }}>
                      {section.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".5em",
                      }}
                    >
                      {section.text.map((display) => (
                        <Link key={display.id} href={display.href}>
                          <Typography
                            sx={{
                              fontSize: ".9rem",
                              color: "#1e1e1e",
                              "&:hover": {
                                color: "#4c4c4c",
                              },
                              transition: "color 150ms ease-in",
                            }}
                          >
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
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          p: { xs: "2em 0", lg: "1.25em 0" },
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
              <Typography
                sx={{
                  fontSize: ".8rem",
                  color: "#1e1e1e",
                  "&:hover": {
                    color: "#4c4c4c",
                  },
                  transition: "color 150ms ease-in",
                }}
              >
                {footerLinks.label}
              </Typography>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: ".8rem",
              color: "#1e1e1e",
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
