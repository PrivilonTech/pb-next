import React from "react";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

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
    <Box
      sx={{
        width: { xs: "100px", md: "200px" },
        position: "absolute",
        left: { sm: "0", md: "30px" },
        marginTop: "5px",
        borderRadius: "7px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      {data.map((option, index) => (
        <Box
          key={index}
          sx={{
            padding: ".5em 1em",
            overflow: "hidden",
            borderBottom: "1px solid gray",
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
  );
}
