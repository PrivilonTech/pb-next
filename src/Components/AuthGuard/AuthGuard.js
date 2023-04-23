import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import firebaseApp from "@/firebase/clientApp";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    // Subscribe to Firebase authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        if (router.pathname !== "/") {
          // Redirect to login page if not on home page
          router.push("/register");
        }
      }
    });

    return unsubscribe;
  }, [auth]);

  return <>{children}</>;
}
