import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Chart from "chart.js/auto";
import { Box } from "@mui/material";

import crudeList from "@/menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";

function Crude(response) {
  const router = useRouter();
  const chartRef = React.useRef(null);
  const path = router.query.crude;

  const [selectedOption, setSelectedOption] = useState("Monthly");

  const [data, setData] = useState({
    labels: response.response.data.key,
    datasets: [
      {
        label: path,
        data: response.response.data.value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  });

  React.useEffect(() => {
    router.push(`/crude/${path}?type=${selectedOption}`);

    // check if component is mounted
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: {
        tension: "0.2",
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
  }, [selectedOption]);

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
        path={path}
        mainContent={BodyContent}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </>
  );
}

export default Crude;

export const getServerSideProps = async ({ query }) => {
  const type = query.type || "Monthly";

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/feedstock?name=${query.crude}&country=China&type=${type}`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
