import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import firebaseApp from "@/firebase/clientApp";

const useCurrentUser = () => {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [user]);

  return user;
};

export default useCurrentUser;
