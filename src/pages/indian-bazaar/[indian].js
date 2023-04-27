import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import indianBazaarList from "@/menuLists/indianBazaarList";
import DataContainer from "@/Components/PaneContent/DataContainer";
import combineData from "@/utils/combineData";
import categorizeData from "@/utils/categorizeCities";
import { getIndianData } from "@/utils/apiCalls";

export default function Indian({ response, city }) {
  const router = useRouter();
  const path = router.query.indian;

  const [data, setData] = useState(combineData(response.data));

  const [cityCategory, setCityCategory] = useState(city.data[0].city);
  const cityNames = categorizeData(city.data); //array of city names

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
      {data.map((dataItem) => (
        <DataContainer
          key={dataItem.id}
          title={dataItem.polymerType}
          polymerSubType={dataItem.polymerSubType}
          polymerValue={dataItem.value}
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

export const getServerSideProps = async ({ query }) => {
  const cityWise = await axios.get(
    `https://polymerbazar-be.onrender.com/api/${query.indian}`
  );

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/${query.indian}/${cityWise.data.data[0].city}`
  );

  return {
    props: {
      response: res.data,
      city: cityWise.data,
    },
  };
};
