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
      }}
    >
      {homePageCategories.map((item) => (
        <Box
          onClick={() => router.push(item.href)}
          key={item.id}
          sx={{
            width: "30%",

            background: "rgba(221, 221, 221, 0.2)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropDilter: "blur(5px)",
            padding: ".5em 1em",
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
          <Link href={item.href}>
            <Typography sx={{ color: "#1e1e1e" }}>{item.label}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
}
