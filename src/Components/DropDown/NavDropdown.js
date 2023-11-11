import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { NavDropDownItem } from "./DropDownItem";

export default function NavDropDownContainer({ content, lastContainer }) {
  const router = useRouter();
  const path = router.pathname;

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  useEffect(() => {
    setIsDropDownOpen(false);
  }, [path]);

  return (
    <Box
      sx={{ position: "relative", cursor: "pointer" }}
      onMouseEnter={() => setIsDropDownOpen(true)}
      onMouseLeave={() => setIsDropDownOpen(false)}
    >
      {content.navItems ? (
        <>
          <Box
            onClick={() => router.push(content.link)}
            sx={{ display: "flex", gap: ".5em", alignItems: "center" }}
          >
            <Typography
              sx={{
                fontSize: { md: ".8em", lg: "1rem" },
                fontWeight: 500,
                lineHeight: "17px",
                color: "#121212",
                "&:hover": {
                  color: "#d9232a",
                },
                transition: "color 150ms ease-in",
              }}
            >
              {content.txt}
            </Typography>
            <KeyboardArrowDownIcon
              sx={{
                transform: `rotate(${isDropDownOpen ? 180 : 0}deg)`,
                transition: "transform 100ms ease-in",
              }}
            />
          </Box>
          <Box
            sx={{
              minWidth: "180px",
              position: "absolute",
              borderRadius: "10px",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              background: "#e5e5e5",
              zIndex: 99999,
              paddingBottom: isDropDownOpen ? "1.25em" : 0,
              left: lastContainer ? "-75%" : "0%",
            }}
          >
            {content.navItems.map((item, index) => (
              <NavDropDownItem
                key={index}
                item={item}
                isDropDownOpen={isDropDownOpen}
                href={`${content.link}/${item.slug}`}
              />
            ))}
          </Box>
        </>
      ) : (
        <Box
          onClick={() => router.push(content.link)}
          sx={{
            cursor: "pointer",
            borderRadius: "10px",
            padding: ".5em",
          }}
        >
          <Typography
            sx={{
              margin: "auto",
              textAlign: "center",
              fontSize: { md: ".8em", lg: "1rem" },
              fontWeight: 500,
              lineHeight: "17px",
              color: "#121212",
              "&:hover": {
                color: "#d9232a",
              },
              transition: "color 150ms ease-in",
            }}
          >
            {content.txt}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
