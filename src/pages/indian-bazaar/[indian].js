import React from "react";
import { useRouter } from "next/router";

import IndianBazaarContent from "@/Components/IndianBazaar/IndianBazaarContent";
import { RateRevision } from "@/dummyData/indianBazaarData";

export default function Indian() {
  const router = useRouter();
  const path = router.query.indian;

  return (
    <>
      <IndianBazaarContent indianBazdataaarData={RateRevision} path={path} />
    </>
  );
}
