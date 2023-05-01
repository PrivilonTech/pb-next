import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import crudeList from "@/menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import { getCrudeData } from "@/utils/apiCalls";
import EmptyData from "@/Components/PaneContent/EmptyData";
import { ClipLoader } from "react-spinners";
import { Box } from "@mui/material";

function Crude() {
  const router = useRouter();
  const path = router.query.crude;

  const [selectedOption, setSelectedOption] = useState("Monthly");

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (path) {
      getCrudeData(path, "China", selectedOption, setData, setIsLoading);
    }
  }, [selectedOption, path]);

  const BodyContent = (
    <>
      <>
        {isLoading ? (
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "50vh",
            }}
          >
            <ClipLoader color="#C31815" size={30} />
          </Box>
        ) : (
          <Graph data={data} />
        )}
      </>
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
        secondarySelectedOption={selectedOption}
        secondarySetSelectedOption={setSelectedOption}
      />
    </>
  );
}

export default Crude;
