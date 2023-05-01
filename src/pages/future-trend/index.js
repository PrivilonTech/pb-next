import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";

import { monthsArray, yearArray } from "@/utils/dateArray";
import { getTextData } from "@/utils/apiCalls";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import BlogContent from "@/Components/PaneContent/BlogContent";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import futureTrendList from "@/menuLists/futureTrendList";
import EmptyData from "@/Components/PaneContent/EmptyData";
import { ClipLoader } from "react-spinners";

function index({ response }) {
  const [data, setData] = useState(response.data);
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
        <BlogContent data={data} />
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
    </>
  );
}

export default index;

export const getServerSideProps = async () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/blogs?type=PP&year=${currentYear}&month=${
      currentMonth + 1
    }`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
