import React, { useState, useEffect } from "react";
import axios from "axios";

import crudeList from "../../menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import { getCrudeData } from "@/utils/apiCalls";

function index({ response }) {
  const [selectedOption, setSelectedOption] = useState("Monthly");
  const [data, setData] = useState({});

  //on state change
  useEffect(() => {
    getCrudeData("Naphtha", "China", selectedOption, setData);
  }, [selectedOption]);

  console.log(data);

  const BodyContent = (
    <>
      <Graph data={data} />
    </>
  );

  return (
    <>
      <PaneContentLayout
        title="Crude"
        list={crudeList}
        page="crude"
        path="Naphtha"
        mainContent={BodyContent}
        secondaryDropdown
        secondaryDropdownData={["Monthly", "Yearly"]}
        secondarySelectedOption={selectedOption}
        secondarySetSelectedOption={setSelectedOption}
      />
    </>
  );
}

export default index;

export const getServerSideProps = async () => {
  const res = await axios.get(
    "https://polymerbazar-be.onrender.com/api/feedstock?name=Naphtha&country=China&type=Monthly"
  );
  return {
    props: {
      response: res.data,
    },
  };
};
