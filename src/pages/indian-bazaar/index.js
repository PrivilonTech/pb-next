import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

import indianBazaarList from "@/menuLists/indianBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import BlogContent from "@/Components/PaneContent/BlogContent";

import { monthsArray, yearArray } from "@/utils/dateArray";
import { getTextData } from "@/utils/apiCalls";

export default function IndianBazaar({ response }) {
  const [data, setData] = useState(response.data);
  const [dataChange, setDataChange] = useState(false);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const getYearArray = yearArray();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers

  useEffect(() => {
    getTextData("rateRevision", monthIndex, year, setData);
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
      <AdminTextUpload path="rateRevision" setDataChange={setDataChange} />
      {data.length > 0 ? (
        <BlogContent data={data} />
      ) : (
        <Typography sx={{ textAlign: "center" }}>No data yet</Typography>
      )}
    </Box>
  );

  return (
    <>
      <PaneContentLayout
        title="Indian Bazaar"
        list={indianBazaarList}
        page="indian-bazaar"
        path="rateRevision"
        mainContent={BodyContent}
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

export const getServerSideProps = async () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/blogs?type=rateRevision&year=${currentYear}&month=${currentMonth}`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
