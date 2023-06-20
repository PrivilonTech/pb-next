import { useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import firebaseApp from "@/firebase/clientApp";
import { ModalContext } from "@/Components/HomePage/ModalProvider";

const useCurrentUser = () => {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(null);

  const { setCurretUserLoading } = useContext(ModalContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    setCurretUserLoading(false);
    return unsubscribe;
  }, [user]);

  return user;
};

export default useCurrentUser;
