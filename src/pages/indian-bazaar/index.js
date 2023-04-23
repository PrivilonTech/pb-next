import React from "react";

import { RateRevision } from "@/dummyData/indianBazaarData";
import IndianBazaarContent from "@/Components/IndianBazaar/IndianBazaarContent";

export default function IndianBazaar() {
  return (
    <>
      <IndianBazaarContent
        indianBazdataaarData={RateRevision}
        path="rateRevision"
      />
    </>
  );
}
