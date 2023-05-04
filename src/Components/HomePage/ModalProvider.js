import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
