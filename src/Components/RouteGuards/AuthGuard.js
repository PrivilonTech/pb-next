import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import secureLocalStorage from "react-secure-storage";

import { ModalContext } from "../HomePage/ModalProvider";
import { getUserByUID } from "@/utils/utilsUser";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const path = router.pathname;

  const currentUser = useCurrentUser();

  const { loading, setLoading } = useContext(ModalContext);
  const userLoggedIn = secureLocalStorage.getItem("user");

  const userNotFound = userLoggedIn === "undefined" || !userLoggedIn;

  //store user data only once in the local storage
  useEffect(() => {
    if (userNotFound && currentUser) {
      const getUserInfo = async () => {
        const fetchedUser = await getUserByUID(currentUser?.uid);
        secureLocalStorage.setItem("user", fetchedUser);
        setLoading(false);
      };
      getUserInfo();
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (userNotFound && path !== "/") {
      router.push("/register");
    }
  }, [path]);

  return <>{children}</>;
}
