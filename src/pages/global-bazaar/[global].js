import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

import globalBazaarList from "../../menuLists/globalBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import { monthsArray, yearArray } from "@/utils/dateArray";
import { getGlobalData } from "@/utils/apiCalls";

function Global({ response }) {
  const router = useRouter();
  const path = router.query.global;

  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [month, setMonth] = useState("October"); //pass current month here
  const monthIndex = monthsArray.indexOf(month) + 1; //store month in numbers
  const [year, setYear] = useState(2022); // pass currentYear here

  const [data, setData] = useState(response.data.data);

  const getYearArray = yearArray();

  useEffect(() => {
    getGlobalData(path, monthIndex, year, setData);
  }, [month, year]);

  const BodyContent = <Box>{console.log(data)}</Box>;

  return (
    <>
      <PaneContentLayout
        title="Global Bazaar"
        list={globalBazaarList}
        page="global-bazaar"
        path={path}
        mainContent={BodyContent}
        dropdownData={monthsArray}
        selectedOption={month}
        setSelectedOption={setMonth}
        secondaryDropdown
        secondaryDropdownData={getYearArray}
        secondarySelectedOption={year}
        setSecondarySelectedOption={setYear}
      />
    </>
  );
}

export default Global;

export const getServerSideProps = async ({ query }) => {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  //use this api call - https://polymerbazar-be.onrender.com/api/internationaloffers?country=${query.global}&month=${currentMonth]&year=${currentYear}

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/internationaloffers?country=${query.global}&month=10&year=2022`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
