import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";

import { ModalContext } from "../HomePage/ModalProvider";
import { getUserByUID } from "@/utils/utilsUser";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function AuthGuard({ children }) {
  const router = useRouter();

  const currentUser = useCurrentUser();

  const { user, setUser } = useContext(ModalContext);

  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(true);

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
  }, [user]);

  console.log(loading);

  return <>{children}</>;
}
