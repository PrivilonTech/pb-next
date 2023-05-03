import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import { Box } from "@mui/material";

export default function Graph({ data, leftSpacing, onClick }) {
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
        // pointStyle: false,
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
              delay = context.dataIndex * 40 + context.datasetIndex * 150;
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
      onClick={onClick}
      sx={{
        marginLeft: leftSpacing && { md: "1em" },
        height: { xs: "60vh", md: "60vh" },
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <canvas ref={chartRef} />
    </Box>
  );
}
