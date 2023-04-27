import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import crudeList from "@/menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import { getCrudeData } from "@/utils/apiCalls";

function Crude({ response }) {
  const router = useRouter();
  const path = router.query.crude;

  const [selectedOption, setSelectedOption] = useState("Monthly");
  // const [city, setCity] = useState("China");

  const [data, setData] = useState({
    labels: response.data.key,
    datasets: [
      {
        label: path,
        data: response.data.value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  });

  //on state change
  useEffect(() => {
    getCrudeData(path, "China", selectedOption, setData);
  }, [selectedOption]);

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
        path={path}
        mainContent={BodyContent}
        secondaryDropdown
        secondaryDropdownData={["Monthly", "Yearly"]}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </>
  );
}

export default Crude;

export const getServerSideProps = async ({ query }) => {
  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/feedstock?name=${query.crude}&country=China&type=Monthly`
  );
  return {
    props: {
      response: res.data,
    },
  };
};
