import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import firebaseApp from "@/firebase/clientApp";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Subscribe to Firebase authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, set user state
        setUser(user);
      } else {
        // User is signed out, clear user state
        setUser(null);
        if (router.pathname !== "/") {
          // Redirect to login page if not on home page
          router.push("/auth");
        }
      }
    });

    return unsubscribe;
  }, [auth, router]);

  if (!user && router.pathname !== "/") {
    router.push("/auth");
    return null;
  }

  return <>{children}</>;
}
