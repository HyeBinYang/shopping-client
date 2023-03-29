import React, { useMemo } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

type CloseButtonSize = "Large" | "Medium" | "Small";

interface CloseButtonProps {
  size?: CloseButtonSize;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: React.FC<CloseButtonProps> = ({ size = "Medium", className, onClick }) => {
  const buttonSize = useMemo(() => {
    switch (size) {
      case "Large":
        return 32;
      case "Medium":
        return 24;
      case "Small":
        return 16;
    }
  }, [size]);

  return (
    <Wrapper className={className} onClick={onClick}>
      <AiOutlineClose size={buttonSize} />
    </Wrapper>
  );
};

export default CloseButton;
