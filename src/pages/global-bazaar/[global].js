import React from "react";
import { useRouter } from "next/router";

import Graphbar from "@/Components/Graphbar/Graphbar";

import {
  usa,
  asiaChina,
  asiaIndia,
  asiaPakistan,
  otherAsianNation,
  saudiArabia,
  middleEast,
  european,
  turkey,
  africaEgypt,
  africaCfrWest,
} from "@/dummyData/globalBazaarData";
import globalBazaarList from "../../menuLists/globalBazaarList";

function Global() {
  const router = useRouter();
  const path = router.query.global;

  let data = {};

  if (path === "usa") {
    data = usa;
  }
  if (path === "asiaChina") {
    data = asiaChina;
  }
  if (path === "asiaIndia") {
    data = asiaIndia;
  }
  if (path === "asiaPakistan") {
    data = asiaPakistan;
  }
  if (path === "otherAsianNation") {
    data = otherAsianNation;
  }
  if (path === "saudiArabia") {
    data = saudiArabia;
  }
  if (path === "middleEast") {
    data = middleEast;
  }
  if (path === "turkey") {
    data = turkey;
  }
  if (path === "european") {
    data = european;
  }
  if (path === "africaEgypt") {
    data = africaEgypt;
  }
  if (path === "africaCfrWest") {
    data = africaCfrWest;
  }

  return (
    <>
      <Graphbar
        path={path}
        data={data}
        sideBarList={globalBazaarList}
        page="global-bazaar"
      />
    </>
  );
}

export default Global;
