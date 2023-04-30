import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

import globalBazaarList from "../../menuLists/globalBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import { monthsArray, yearArray } from "@/utils/dateArray";
import { getGlobalData, getTextData } from "@/utils/apiCalls";
import DataContainer from "@/Components/PaneContent/DataContainer";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import BlogContent from "@/Components/PaneContent/BlogContent";

function Global({ response }) {
  const router = useRouter();
  const path = router.query.global;

  const [data, setData] = useState(response.data.data);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const getYearArray = yearArray();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers

  const [dataChange, setDataChange] = useState(false);

  useEffect(() => {
    if (path !== "china") {
      getGlobalData(path, monthIndex, year, setData);
    }
  }, [month, year]);

  useEffect(() => {
    if (path === "china") {
      getTextData(path, monthIndex, year, setData);
    }
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
      {path !== "china" ? (
        <Box
          sx={{
            margin: { xs: "2em auto", md: "0 auto" },
            display: "flex",
            justifyContent: "center",
            gap: "2em 5em",
            flexWrap: "wrap",
          }}
        >
          {data.length > 0 ? (
            data.map((eachData, index) => (
              <>
                {eachData.dataKeys.map((dataItem, id) => (
                  <DataContainer
                    key={id}
                    date={data[index].date}
                    title={dataItem}
                    polymerSubType={eachData.subKeys[dataItem]}
                    polymerValue={eachData.subValues[dataItem]}
                  />
                ))}
              </>
            ))
          ) : (
            <Typography
              sx={{ marginTop: ".5em", color: "#575757", fontSize: "1.5rem" }}
            >
              No Data yet
            </Typography>
          )}
        </Box>
      ) : (
        <>
          <AdminTextUpload path={path} setDataChange={setDataChange} />
          <BlogContent data={data} />
        </>
      )}
    </Box>
  );

  return (
    <>
      <PaneContentLayout
        title="Global Bazaar"
        list={globalBazaarList}
        page="global-bazaar"
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

export default Global;

export const getServerSideProps = async ({ query }) => {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/internationaloffers?country=${query.global}&month=${currentMonth}&year=${currentYear}`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
