import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isUserProfileModalOpen,
        setIsUserProfileModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
