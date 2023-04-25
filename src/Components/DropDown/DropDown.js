import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import DropDownItem from "./DropDownItem";

export default function DropDown({ data, indexData, setIndexData }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          padding: "0 30px",
          color: "#575757",
          fontSize: ".9rem",
          display: "flex",
          gap: ".25em",
          cursor: "pointer",
        }}
        onClick={() => setIsDropDownOpen((prev) => !prev)}
      >
        <Typography sx={{ fontWeight: "600" }}>{data[indexData]}</Typography>
        <KeyboardArrowDownIcon
          sx={{
            transform: `rotate(${isDropDownOpen ? 180 : 0}deg)`,
            transition: "transform 100ms ease-in",
          }}
        />
      </Box>
      {isDropDownOpen && (
        <DropDownItem
          data={data}
          selectedOption={indexData}
          setSelectedOption={setIndexData}
          setIsDropDownOpen={setIsDropDownOpen}
        />
      )}
    </Box>
  );
}
