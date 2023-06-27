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
  dropdown,
  dropdownData,
  selectedOption,
  setSelectedOption,

  secondaryDropdown,
  secondaryDropdownData,
  secondarySelectedOption,
  secondarySetSelectedOption,

  thirdDropdown,
  thirdDropdownData,
  thirdSelectedOption,
  thirdSetSelectionOption,
}) {
  return (
    <Box
      sx={{
        p: "5%",
        py: "2%",
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
            padding: { xs: "5px 10px", sm: "5px 25px" },
            width: { sm: "15%", md: "9.5%" },
            borderRight: "1px solid #D9232A",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "0em",
          }}
        >
          {dropdown && (
            <DropDown
              data={dropdownData}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )}
          {secondaryDropdown && (
            <DropDown
              data={secondaryDropdownData}
              selectedOption={secondarySelectedOption}
              setSelectedOption={secondarySetSelectedOption}
            />
          )}
          {thirdDropdown && (
            <DropDown
              data={thirdDropdownData}
              selectedOption={thirdSelectedOption}
              setSelectedOption={thirdSetSelectionOption}
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
            marginLeft: { md: "1em" },
            width: { xs: "100%", md: "85%" },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2em",
            paddingTop: "1em",

            background: "hsla(180, 27%, 94%, 1)",
            backgroundImage:
              "radial-gradient(circle, hsla(180, 27%, 94%, 1) 0%, hsla(0, 0%, 100%, 1) 80%)",
            MozBackgroundImage:
              "radial-gradient(circle, hsla(180, 27%, 94%, 1) 0%, hsla(0, 0%, 100%, 1) 80%)",
            WebkitBackgroundImage:
              "radial-gradient(circle, hsla(180, 27%, 94%, 1) 0%, hsla(0, 0%, 100%, 1) 80%)",
            filter:
              "progid:DXImageTransform.Microsoft.gradient(startColorstr='#EAF3F3', endColorstr='#FFFFFF', GradientType=1)",
          }}
        >
          {/* CONTENT HERE */}
          {mainContent}
        </Box>
      </Box>
    </Box>
  );
}
