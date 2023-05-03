import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";

export default function ScrollTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add event listener to check scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    // Check if user has scrolled a certain amount of the site
    if (window.pageYOffset > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          right: "30px",
          bottom: showButton ? "40px" : "-60px",
          transition: "bottom 200ms ease-in",
          background: "#dbd9d9",
          padding: "5px",
          display: "flex",
          justifyContent: "center",
          borderRadius: "50%",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: 30 }} onClick={scrollToTop} />
      </Box>
    </>
  );
}
