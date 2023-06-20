import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [fetchedUser, setFetchedUser] = useState(null);
  const [fetchLoader, setFetchLoader] = useState(true);
  const [curretUserLoading, setCurretUserLoading] = useState(true);

  return (
    <ModalContext.Provider
      value={{
        loading,
        setLoading,
        fetchedUser,
        setFetchedUser,
        fetchLoader,
        setFetchLoader,
        curretUserLoading,
        setCurretUserLoading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
