import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Graphbar from "@/Components/Graphbar/Graphbar";

import {
  naptha,
  propylene,
  ethylene,
  pta,
  vcm,
  steryne,
} from "@/dummyData/data";
import crudeList from "../../menuLists/crudeList";

function Crude(response) {
  const router = useRouter();
  const path = router.query.crude;

  let data = {};

  if (path === "naptha") {
    data = naptha;
  }
  if (path === "propylene") {
    data = propylene;
  }
  if (path === "ethylene") {
    data = ethylene;
  }
  if (path === "vcm&edc") {
    data = vcm;
  }
  if (path === "steryne") {
    data = steryne;
  }
  if (path === "pta") {
    data = pta;
  }

  return (
    <>
      <Graphbar path={path} data={data} sideBarList={crudeList} page="crude" />
    </>
  );
}

export default Crude;

export const getServerSideProps = async ({ query }) => {
  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/feedstock/${query.crude}`
  );
  return {
    props: {
      response: res.data,
    },
  };
};
