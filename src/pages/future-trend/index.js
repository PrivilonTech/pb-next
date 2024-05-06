import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import BlogContent from "@/Components/PaneContent/BlogContent";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import futureTrendList from "@/menuLists/futureTrendList";
import EmptyData from "@/Components/PaneContent/EmptyData";
import PaneFooter from "@/Components/PaneContent/PaneFooter";

import { getTextData } from "@/utils/apiCalls";
import { monthsArray, yearArray } from "@/utils/dateArray";

function index() {
  const [data, setData] = useState({});
  const [dataChange, setDataChange] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const getYearArray = yearArray();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers

  useEffect(() => {
    getTextData("PP", monthIndex, year, setData, setIsLoading);
  }, []);

  useEffect(() => {
    getTextData("PP", monthIndex, year, setData, setIsLoading);
  }, [dataChange, month, year]);

  const BodyContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        width: "100%",
      }}
    >
      <AdminTextUpload path="PP" setDataChange={setDataChange} />
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
        <BlogContent data={data} setDataChange={setDataChange} />
      ) : (
        <EmptyData />
      )}
    </Box>
  );

  return (
    <>
      <PaneContentLayout
        title="Future Trend"
        list={futureTrendList}
        page="future-trend"
        path="PP"
        mainContent={BodyContent}
        dropdown
        dropdownData={monthsArray}
        selectedOption={month}
        setSelectedOption={setMonth}
        secondaryDropdown
        secondaryDropdownData={getYearArray}
        secondarySelectedOption={year}
        secondarySetSelectedOption={setYear}
      />
      <Box sx={{ margin: { xs: "1em 1.5em", md: "2em 5em" } }}>
        <PaneFooter qrCode="pp" />
      </Box>
    </>
  );
}

export default index;
