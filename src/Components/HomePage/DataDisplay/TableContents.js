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
    const interval = setInterval(() => {
      const currentIndex = data[0].dataKeys.indexOf(selectedData);
      const nextIndex = (currentIndex + 1) % data[0].dataKeys.length;

      setSelectedData(data[0].dataKeys[nextIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, [data, selectedData]);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoadingTable />
        </Box>
      ) : (
        <table>
          {selectedData && (
            <>
              <tr>
                <th>{selectedData}</th>
                <th>Price</th>
              </tr>
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
                <tr key={`empty-${index}`}>
                  <td style={{ padding: "25px 0" }}></td>
                  <td style={{ padding: "25px 0" }}></td>
                </tr>
              ))}
            </>
          )}
        </table>
      )}
    </>
  );
}
