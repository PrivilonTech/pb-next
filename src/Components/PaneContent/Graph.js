import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import { Box } from "@mui/material";

export default function Graph({ data }) {
  const chartRef = useRef(null);

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
