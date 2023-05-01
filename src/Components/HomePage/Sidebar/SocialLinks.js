import React from "react";
import { Box } from "@mui/material";
import { socialIcons } from "@/menuLists/homePageCategories";

export default function SocialLinks() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1em",
      }}
    >
      {socialIcons.map((socialItem) => (
        <Box
          onClick={() => router.push(socialItem.href)}
          key={socialItem.id}
          sx={{
            background: "rgba(221, 221, 221, 0.2)",
            borderRadius: "50%",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropDilter: "blur(5px)",
            padding: ".75em .75em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              background: "#d6d3d2",
            },
            transition: "background 150ms ease-in",
          }}
        >
          <img src={socialItem.icon} alt="social-icon" height={20} />
        </Box>
      ))}
    </Box>
  );
}
