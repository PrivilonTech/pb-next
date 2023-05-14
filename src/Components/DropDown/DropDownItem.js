import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function DropDownItem({
  data,
  selectedOption,
  setIsDropDownOpen,
  setSelectedOption,
}) {
  const handleSelectionOption = (option) => {
    setSelectedOption(option);
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    //close user profile menu
    window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        setIsDropDownOpen(false);
      }
    });
  }, []);

  return (
    <motion.div initial={{ y: 0 }} animate={{ y: 20 }} exit={{ y: 0 }}>
      <Box
        sx={{
          width: "auto",
          minWidth: "110px",
          position: "absolute",
          left: { sm: "10px", md: "30px" },
          marginTop: "-.5em",
          borderRadius: "10px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          background: "#e7e4e4",
          boxShadow: "8px 8px 16px #c2c0c0, -8px -8px 16px #ffffff",
          overflow: "hidden",
        }}
      >
        {data.map((option, index) => (
          <Box
            key={index}
            sx={{
              padding: ".5em 1em",
              overflow: "hidden",
              borderTop: "1px solid #e3c0c0",
              background: selectedOption === option ? "#c31815" : "#dfdfdf",
              cursor: "pointer",
            }}
            onClick={() => handleSelectionOption(option)}
          >
            <Typography
              sx={{
                color: selectedOption === option ? "white" : "#575757",
              }}
            >
              {option}
            </Typography>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
}
