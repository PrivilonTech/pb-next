import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import globalBazaarList from "../../menuLists/globalBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import DataContainer from "@/Components/PaneContent/DataContainer";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import BlogContent from "@/Components/PaneContent/BlogContent";
import EmptyData from "@/Components/PaneContent/EmptyData";
import PaneFooter from "@/Components/PaneContent/PaneFooter";

import { monthsArray, yearArray } from "@/utils/dateArray";
import { getGlobalData, getTextData } from "@/utils/apiCalls";

function Global() {
  const router = useRouter();
  const path = router.query.global;

  const [data, setData] = useState([]);
  const [textData, setTextData] = useState([]);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const getYearArray = yearArray();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers

  const [dataChange, setDataChange] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (path) {
      getGlobalData(path, monthIndex, year, setData, setIsLoading);
      getTextData(path, monthIndex, year, setTextData, setIsLoading);
    }
  }, [path]);

  useEffect(() => {
    getGlobalData(path, monthIndex, year, setData, setIsLoading);
  }, [month, year]);

  useEffect(() => {
    getTextData(path, monthIndex, year, setTextData, setIsLoading);
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
      <Box
        sx={{
          margin: { xs: "2em auto", md: "0 auto" },
          display: "flex",
          justifyContent: "center",
          gap: "2em 5em",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {data.length > 0 || textData.length > 0 ? (
          <>
            {data.map((eachData, index) =>
              eachData.dataKeys.map((dataItem, id) => (
                <DataContainer
                  key={`${index}-${id}`}
                  date={eachData.date}
                  title={dataItem}
                  polymerSubType={eachData.subKeys[dataItem]}
                  polymerValue={eachData.subValues[dataItem]}
                />
              ))
            )}
            <BlogContent data={textData} setDataChange={setDataChange} />
          </>
        ) : (
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "50vh",
            }}
          >
            {isLoading ? (
              <ClipLoader color="#C31815" size={30} />
            ) : (
              <EmptyData />
            )}
          </Box>
        )}
      </Box>
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
      <Box sx={{ margin: { xs: "1em 1.5em", md: "2em 5em" } }}>
        <PaneFooter qrCode={path} />
      </Box>
    </>
  );
}

export default Global;
