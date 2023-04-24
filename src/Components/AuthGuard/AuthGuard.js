import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import firebaseApp from "@/firebase/clientApp";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        if (router.pathname !== "/" && router.pathname !== "/register") {
          router.push("/register");
        }
      }
    });

    return unsubscribe;
  }, [auth]);

  return <>{children}</>;
}
