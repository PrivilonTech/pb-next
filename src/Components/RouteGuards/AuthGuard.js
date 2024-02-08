import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import secureLocalStorage from "react-secure-storage";

import { ModalContext } from "../HomePage/ModalProvider";
import { getUserByUID, isAdminCheck, isTrial } from "@/utils/utilsUser";
import useCurrentUser from "@/hooks/useCurrentUser";
import Loading from "../Loading/Loading";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const path = router.pathname;

  const currentUser = useCurrentUser();
  const { loading, setLoading, setFetchLoader, setFetchedUser } =
    useContext(ModalContext);

  const userLoggedIn = secureLocalStorage.getItem("user");
  const userNotFound = userLoggedIn === "undefined" || !userLoggedIn;

  //store user data only once in the local storage
  useEffect(() => {
    if (userNotFound && currentUser) {
      const getUserInfo = async () => {
        let fetchedUser = null;
        while (!fetchedUser) {
          fetchedUser = await getUserByUID(currentUser?.uid);
          if (!fetchedUser) {
            // User data not yet available in database, wait for 1 second and try again
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
        }
        setFetchedUser(fetchedUser);
        secureLocalStorage.setItem("user", fetchedUser);
        setLoading(false);
        setFetchLoader(false);
      };
      getUserInfo();
    } else {
      setLoading(false);

      setTimeout(() => {
        setFetchLoader(false);
      }, 4000);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!loading && path !== "/") {
      if (!currentUser && userNotFound) {
        setLoading(true);

        router.push("/register");
      } 
      // else if (userLoggedIn && !isAdminCheck(userLoggedIn)) {
      //   if (!isTrial(userLoggedIn) && !userLoggedIn.subscribed) {
      //     setLoading(true);

      //     router.push("/subscription");
      //   }
      // }
    }
    if (path === "/register" || path === "/subscription") {
      setLoading(false);
    }
  }, [path]);

  return <Loading isLoading={loading}>{children}</Loading>;
}
