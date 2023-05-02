import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";

import { ModalContext } from "../HomePage/ModalProvider";
import { getUserByUID, trialExpirationCheck } from "@/utils/utilsUser";
import useCurrentUser from "@/hooks/useCurrentUser";
import Loading from "../Loading/Loading";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const path = router.pathname;

  const currentUser = useCurrentUser();

  const { user, setUser, loading, setLoading } = useContext(ModalContext);
  const [fetching, setFetching] = useState(true);
  const [inTrial, setInTrial] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      if (currentUser) {
        const fetchedUser = await getUserByUID(currentUser?.uid);
        setUser(fetchedUser);
        setFetching(false);
      }
    };

    getUserInfo();
  }, [currentUser]);

  useEffect(() => {
    if (!fetching && user) {
      setLoading(false);
    }
    if (currentUser && user?.role !== "admin") {
      setInTrial(trialExpirationCheck(user));
    }
  }, [user]);

  // auth guard implementation
  // useEffect(() => {
  //   console.log(currentUser);
  //   if (!currentUser) {
  //     if (path !== "/") {
  //       router.push("/register");
  //     }
  //   } else if (!user?.subscribed && !inTrial && path !== "/") {
  //     router.push("/subscription");
  //   }
  // }, [path, currentUser]);

  return <>{children}</>;
}
