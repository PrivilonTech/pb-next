import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
// import Plot from "react-plotly.js";

import { Box } from "@mui/material";

export default function Graph({ data }) {
  const chartRef = useRef(null);
  // const Plot = require("react-plotly.js").default;

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
  }, [data]);
  return (
    <Box
      sx={{
        marginLeft: { md: "1em" },
        height: { xs: "60vh", md: "60vh" },
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <canvas style={{ marginTop: "2vh" }} ref={chartRef} />
      {/* <Plot
        data={[
          {
            x: [
              "17/10/2019",
              "21/11/2019",
              "19/12/2019",
              "17/01/2020",
              "20/02/2020",
              "14/03/2020",
              "17/04/2020",
              "15/05/2020",
              "22/06/2020",
              "16/07/2020",
              "18/08/2020",
              "17/09/2020",
            ],
            y: [530, 526, 610, 570, 500, 330, 320, 260, 360, 405, 415, 410],
            type: "scatter",
            mode: "lines",
            marker: { color: "red" },
          },
        ]}
        layout={{ width: 1000, height: 500, title: "A Fancy Plot" }}
      /> */}
    </Box>
  );
}
