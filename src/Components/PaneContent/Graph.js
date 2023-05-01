import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import { Box } from "@mui/material";

export default function Graph({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let delayed;
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tension: 0.1,
        fill: true,
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === "data" &&
              context.mode === "default" &&
              !delayed
            ) {
              delay = context.dataIndex * 200 + context.datasetIndex * 80;
            }
            return delay;
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        pointBackgroundColor: "#fff",
        radius: 3,
        hoverRadius: 5,
        scales: {
          // y: {
          //   beginAtZero: true,
          // },
          x: {
            ticks: {
              display: false,
            },
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
    </Box>
  );
}
