import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import FlipNumbers from "react-flip-numbers";

import LoadingTable from "@/Components/Loading/LoadingTable";
import { formatDate } from "@/utils/dateArray";

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
    }, 6000);

    return () => clearInterval(interval);
  }, [data, selectedData]);

  return (
    <>
      {loading ? (
        <LoadingTable />
      ) : (
        <table>
          {selectedData && (
            <>
              <thead>
                <tr>
                  <th
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Typography>{selectedData}</Typography>
                  </th>
                  <th>
                    <Typography>Date</Typography>
                  </th>
                  <th>
                    <Typography>Price</Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data[0].subKeys[selectedData].map((subItems, index) => (
                  <tr key={index}>
                    <td>{subItems}</td>
                    <td>{formatDate(data[0].date)}</td>
                    <td style={{ textAlign: "center" }}>
                      <FlipNumbers
                        height={17}
                        width={15}
                        play
                        perspective={200}
                        numbers={data[0].subValues[selectedData][
                          index
                        ].toString()}
                      />
                    </td>
                  </tr>
                ))}
                {[
                  ...Array(
                    Math.max(0, 5 - data[0].subKeys[selectedData].length)
                  ),
                ].map((_, index) => (
                  <tr key={index}>
                    <td style={{ padding: "25px 0" }}></td>
                    <td style={{ padding: "25px 0" }}></td>
                    <td style={{ padding: "25px 0" }}></td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      )}
    </>
  );
}
