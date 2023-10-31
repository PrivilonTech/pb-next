import { useRouter } from "next/router";

import Subscription from "@/Components/Subscription/Subscription";
import ShowBackArrow from "@/Components/Register/ShowBackArrow";

export default function index() {
  const router = useRouter(); //remove this line
  router.push("/"); //remove this line

  return (
    <>
      <ShowBackArrow />
      <Subscription />
    </>
  );
}
