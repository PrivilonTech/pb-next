import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [fetchedUser, setFetchedUser] = useState(null);
  const [fetchLoader, setFetchLoader] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        loading,
        setLoading,
        fetchedUser,
        setFetchedUser,
        fetchLoader,
        setFetchLoader,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
