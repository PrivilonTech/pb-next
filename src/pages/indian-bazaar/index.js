import React from "react";

import { RateRevision } from "@/dummyData/indianBazaarData";
import indianBazaarList from "@/menuLists/indianBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import DataContainer from "@/Components/PaneContent/DataContainer";

export default function IndianBazaar() {
  const BodyContent = (
    <>
      {RateRevision.data.map((data) => (
        <DataContainer
          key={data.id}
          title={data.title}
          listItem={data.listItem}
        />
      ))}
    </>
  );

  return (
    <>
      <PaneContentLayout
        title="Indian Bazaar"
        list={indianBazaarList}
        page="indian-bazaar"
        path="rateRevision"
        mainContent={BodyContent}
      />
    </>
  );
}
