import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import indianBazaarList from "@/menuLists/indianBazaarList";
import DataContainer from "@/Components/PaneContent/DataContainer";
import combineData from "@/utils/combineData";
import categorizeData from "@/utils/categorizeCities";
import {
  getCityData,
  getHistoricalData,
  getIndianData,
} from "@/utils/apiCalls";
import { structureDataIndian } from "@/utils/structureData";

export default function Indian() {
  const router = useRouter();
  const path = router.query.indian;

  const [data, setData] = useState({}); //stores data of a particular city
  const [city, setCity] = useState({}); //stores data of all cities
  const [cityNames, setCityNames] = useState([]);

  const [cityCategory, setCityCategory] = useState("");
  // const cityNames = categorizeData(city?.data); //array of city names

  useEffect(() => {
    if (path === "historicaldata") {
      getHistoricalData(polymerType, year, setData);
    } else {
      getCityData(setCity, setCityCategory, setCityNames);
      getIndianData("Mumbai", setData);
    }
  }, []);

  const modifiedData = structureDataIndian(data);

  useEffect(() => {
    getIndianData(cityCategory, setData);
  }, [cityCategory]);

  const BodyContent = (
    <Box
      sx={{
        margin: { xs: "2em auto", md: "0 auto" },
        display: "flex",
        justifyContent: "center",
        gap: "2em 5em",
        flexWrap: "wrap",
      }}
    >
      {modifiedData.dataKeys.map((dataItem, index) => (
        <DataContainer
          key={index}
          title={dataItem}
          polymerSubType={modifiedData.subKeys[dataItem]}
          polymerValue={modifiedData.subValues[dataItem]}
        />
      ))}
    </Box>
  );

  return (
    <>
      <PaneContentLayout
        title="Indian Bazaar"
        list={indianBazaarList}
        page="indian-bazaar"
        path={path}
        mainContent={BodyContent}
        dropdownData={cityNames}
        selectedOption={cityCategory}
        setSelectedOption={setCityCategory}
      />
    </>
  );
}
