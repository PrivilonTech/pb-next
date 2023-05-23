import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

import futureTrendList from "@/menuLists/futureTrendList";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import BlogContent from "@/Components/PaneContent/BlogContent";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import EmptyData from "@/Components/PaneContent/EmptyData";
import PaneFooter from "@/Components/PaneContent/PaneFooter";

import { monthsArray, yearArray } from "@/utils/dateArray";
import { getTextData } from "@/utils/apiCalls";

export default function FuturePage() {
  const router = useRouter();
  const path = router.query.future;

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
    if (path) {
      getTextData(path, monthIndex, year, setData, setIsLoading);
    }
  }, [path]);

  useEffect(() => {
    getTextData(path, monthIndex, year, setData, setIsLoading);
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
      <AdminTextUpload path={path} setDataChange={setDataChange} />
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
        path={path}
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
        <PaneFooter />
      </Box>
    </>
  );
}
