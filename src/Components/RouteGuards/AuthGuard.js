import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";

import { ModalContext } from "../HomePage/ModalProvider";
import { getUserByUID } from "@/utils/utilsUser";
import useCurrentUser from "@/hooks/useCurrentUser";
import Loading from "../Loading/Loading";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const path = router.pathname;

  const currentUser = useCurrentUser();

  const [authLoader, setAuthLoader] = useState(false);
  const { user, setUser, loading, setLoading, currentUserLoading } =
    useContext(ModalContext);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      if (currentUser) {
        const fetchedUser = await getUserByUID(currentUser?.uid);
        setUser(fetchedUser);
        setFetching(false);
      } else if (!currentUserLoading) {
        setFetching(false);
      }
    };

    getUserInfo();
  }, [currentUser]);

  useEffect(() => {
    if (!fetching) {
      setLoading(false);
    }
    if (!currentUserLoading && !currentUser) {
      setLoading(false);
    }
  }, [currentUserLoading, fetching]);

  // auth guard implementation
  // useEffect(() => {
  //   if (!currentUser && !loading) {
  //     if (path !== "/") {
  //       setAuthLoader(true);
  //       router.push("/register");
  //       setAuthLoader(false);
  //     }
  //   }
  // }, [path, currentUser]);

  return <Loading isLoading={authLoader}>{children}</Loading>;
}
