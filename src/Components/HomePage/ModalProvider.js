import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentUserLoading, setCurrentUserLoading] = useState(true);

  return (
    <ModalContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        currentUserLoading,
        setCurrentUserLoading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
