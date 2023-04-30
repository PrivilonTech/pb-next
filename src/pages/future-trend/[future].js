import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import axios from "axios";

import { monthsArray, yearArray } from "@/utils/dateArray";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import BlogContent from "@/Components/PaneContent/BlogContent";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import futureTrendList from "@/menuLists/futureTrendList";
import { getTextData } from "@/utils/apiCalls";

export default function FuturePage({ response }) {
  const router = useRouter();
  const path = router.query.future;

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
    getTextData(path, monthIndex, year, setData);
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
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/blogs?type=${query.future}&year=${currentYear}&month=${currentMonth}`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
