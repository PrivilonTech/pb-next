import React from "react";
import { useRouter } from "next/router";

import { RateRevision } from "@/dummyData/indianBazaarData";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import indianBazaarList from "@/menuLists/indianBazaarList";
import DataContainer from "@/Components/PaneContent/DataContainer";

export default function Indian() {
  const router = useRouter();
  const path = router.query.indian;

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
