import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <ModalContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
