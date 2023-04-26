import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Chart from "chart.js/auto";
import { Box } from "@mui/material";

import crudeList from "../../menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";

function index(response) {
  const chartRef = React.useRef(null);
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const data = {
    labels: response.response.data.key,
    datasets: [
      {
        label: "Naptha",
        data: response.response.data.value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  };

  React.useEffect(() => {
    router.push(`/crude/naptha?type=${selectedOption}`);

    const chart = new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  const BodyContent = (
    <Box
      sx={{
        marginLeft: { md: "1em" },
        height: { xs: "100%", md: "100%" },
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <canvas style={{ marginTop: "2vh" }} ref={chartRef} />
    </Box>
  );

  return (
    <>
      <PaneContentLayout
        title="Crude"
        list={crudeList}
        page="crude"
        path="naptha"
        mainContent={BodyContent}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
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
