import React, { createContext, ReactNode, useState } from "react";

interface ModalState {
  show: boolean;
  modalChildren: ReactNode | null;
  openModal(component: ReactNode): void;
  closeModal(): void;
}

const ModalContext = createContext<ModalState>({
  show: false,
  modalChildren: null,
  openModal: () => {},
  closeModal: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [show, toggle] = useState(false);
  const [modalChildren, setModalChildren] = useState<ReactNode | null>(null);

  const openModal = (component: ReactNode) => {
    toggle(true);
    setModalChildren(component);
  };

  const closeModal = () => {
    toggle(false);
    setModalChildren(null);
  };

  return <ModalContext.Provider value={{ show, modalChildren, openModal, closeModal }}>{children}</ModalContext.Provider>;
};

export default ModalContext;
