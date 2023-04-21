import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isAuthModalOpen,
        setIsAuthModalOpen,

        isUserProfileModalOpen,
        setIsUserProfileModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
