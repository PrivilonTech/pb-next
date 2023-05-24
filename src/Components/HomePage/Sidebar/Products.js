import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

import { homePageCategories } from "@/menuLists/homePageCategories";

export default function Products() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2em",
        marginBottom: "1em",
      }}
    >
      {homePageCategories.map((item) => (
        <Box
          onClick={() => router.push(item.href)}
          key={item.id}
          sx={{
            width: "30%",
            backdropDilter: "blur(5px)",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "2px",
            border: "2px solid gray",
            padding: ".5em 1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              background: "#e5e5e5",
            },
            transition: "background 150ms ease-in",
          }}
        >
          <Link href={item.href}>
            <Typography sx={{ color: "#1e1e1e" }}>{item.label}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}
