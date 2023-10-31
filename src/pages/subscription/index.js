import { useEffect } from "react";
import { useRouter } from "next/router";

import Subscription from "@/Components/Subscription/Subscription";
import ShowBackArrow from "@/Components/Register/ShowBackArrow";

export default function index() {
  const router = useRouter(); //remove this line

  //remove this code
  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <>
      <ShowBackArrow />
      <Subscription />
    </>
  );
}
