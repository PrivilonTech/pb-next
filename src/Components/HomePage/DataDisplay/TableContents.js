import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import LoadingTable from "@/Components/Loading/LoadingTable";

export default function TableContents({ data, loading }) {
  const [selectedData, setSelectedData] = useState(
    loading ? "" : data[0].dataKeys[0]
  );

  useEffect(() => {
    if (!loading && data) {
      setSelectedData(data[0].dataKeys[0]);
    }
  }, [loading, data]);

  useEffect(() => {
    if (!data) {
      return;
    }

    const interval = setInterval(() => {
      const currentIndex = data[0].dataKeys.indexOf(selectedData);
      const nextIndex = (currentIndex + 1) % data[0].dataKeys.length;

      setSelectedData(data[0].dataKeys[nextIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, [data, selectedData]);

  return (
    <table>
      {selectedData && (
        <>
          <thead>
            <tr>
              <th style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Typography>{selectedData}</Typography>
                <Typography>{data[0].date}</Typography>
              </th>
              <th>
                <Typography>Price</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {data[0].subKeys[selectedData]
              .slice(0, 5)
              .map((subItems, index) => (
                <tr key={index}>
                  <td>{subItems}</td>
                  <td style={{ textAlign: "center" }}>
                    {data[0].subValues[selectedData][index]}
                  </td>
                </tr>
              ))}
            {[
              ...Array(Math.max(0, 5 - data[0].subKeys[selectedData].length)),
            ].map((_, index) => (
              <tr key={index}>
                <td style={{ padding: "25px 0" }}></td>
                <td style={{ padding: "25px 0" }}></td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </table>
  );
}
