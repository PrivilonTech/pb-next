import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { ClipLoader } from "react-spinners";

import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import BlogContent from "@/Components/PaneContent/BlogContent";
import EmptyData from "@/Components/PaneContent/EmptyData";

import { getTextData } from "@/utils/apiCalls";
import { monthsArray, yearArray } from "@/utils/dateArray";
import DropDown from "@/Components/DropDown/DropDown";

export default function index() {
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [dataChange, setDataChange] = useState(false);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const getYearArray = yearArray();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers

  useEffect(() => {
    getTextData("PressRelease", monthIndex, year, setData, setIsLoading);
  }, [dataChange, monthIndex, year]);

  return (
    <Box
      sx={{
        margin: { xs: "2em", md: "2em 3em" },
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
          marginBottom: "20px",
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
          Press Release
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "0em",
          }}
        >
          <DropDown
            data={monthsArray}
            selectedOption={month}
            setSelectedOption={setMonth}
          />
          <DropDown
            data={getYearArray}
            selectedOption={year}
            setSelectedOption={setYear}
          />
        </Box>
      </Box>
      <AdminTextUpload path="PressRelease" setDataChange={setDataChange} />
      {isLoading ? (
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            width: "100%",
            height: "50vh",
          }}
        >
          <ClipLoader color="#C31815" size={30} />
        </Box>
      ) : data.length > 0 ? (
        <Box sx={{ margin: "2em 0" }}>
          <BlogContent data={data} setDataChange={setDataChange} />
        </Box>
      ) : (
        <EmptyData />
      )}
    </Box>
  );
}
