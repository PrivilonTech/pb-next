import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";

import { socialIcons } from "@/menuLists/homePageCategories";

export default function SocialLinks() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "1em",
        marginBottom: "1em",
      }}
    >
      {socialIcons.map((socialItem) => (
        <Link
          href={socialItem.href}
          key={socialItem.id}
          target="_blank"
          sx={{
            background: "rgba(221, 221, 221, 0.2)",
            borderRadius: "50%",
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
        </Link>
      ))}
    </Box>
  );
}
