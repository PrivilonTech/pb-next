import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";

import { ModalContext } from "../HomePage/ModalProvider";
import { getUserByUID } from "@/utils/utilsUser";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function AuthGuard({ children }) {
  const router = useRouter();

  const currentUser = useCurrentUser();

  const { user, setUser } = useContext(ModalContext);

  useEffect(() => {
    const getUserInfo = async () => {
      const fetchedUser = await getUserByUID(currentUser?.uid);
      setUser(fetchedUser);
    };

    getUserInfo();
  }, [currentUser]);

  return <>{children}</>;
}
