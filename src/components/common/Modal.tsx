import React, { useContext } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import ModalContext from "../../context/modal";

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
`;

const Modal = () => {
  const { modalChildren } = useContext(ModalContext);

  if (!modalChildren) return null;

  return createPortal(
    <>
      <BackDrop />
      <Wrapper>{modalChildren}</Wrapper>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
