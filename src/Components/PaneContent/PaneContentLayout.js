import React from "react";
import { Box, Typography } from "@mui/material";

import Sidebar from "./Sidebar";
import DropDown from "../DropDown/DropDown";

export default function PaneContentLayout({
  title,
  list,
  page,
  path,
  mainContent,
  dropdownData,
  selectedOption,
  setSelectedOption,
  city,
  setCity,
}) {
  return (
    <Box
      sx={{
        p: "5%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: { xs: "10%", md: "6%" },
          borderRadius: "20px",

          border: "1px solid #D9232A",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{
            color: "#575757",
            padding: "5px 25px",
            width: { sm: "15%", md: "9.5%" },
            borderRight: "1px solid #D9232A",
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", gap: "2em" }}>
          {dropdownData && (
            <DropDown
              data={dropdownData}
              selectedOption={city}
              setSelectedOption={setCity}
            />
          )}
          {selectedOption && (
            <DropDown
              data={["Monthly", "Yearly"]}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          height: "94%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { md: "15%" },
            overflowX: { xs: "scroll", md: "hidden" },
          }}
        >
          <Sidebar list={list} page={page} path={path} />
        </Box>
        <Box
          sx={{
            marginTop: ".7em",
            marginLeft: { md: "1em" },
            width: { xs: "100%", md: "85%" },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2em",
          }}
        >
          {/* CONTENT HERE */}
          {mainContent}
        </Box>
      </Box>
    </Box>
  );
}
