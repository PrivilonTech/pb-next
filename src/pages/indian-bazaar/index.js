import React, { useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";

import indianBazaarList from "@/menuLists/indianBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import DataContainer from "@/Components/PaneContent/DataContainer";
import combineData from "@/utils/combineData";

export default function IndianBazaar({ response }) {
  const [data, setData] = useState(combineData(response.data));

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
        path="rateRevision"
        mainContent={BodyContent}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/citywise/Ahmedabad`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
