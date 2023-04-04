import React, { ReactNode } from "react";
import styled from "styled-components";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Wrapper = styled.div`
  width: 100%;

  .hide__button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  font-size: 17px;
  font-weight: 600;
`;

interface SideNavProps {
  title: string;
  hide?: boolean;
  hideButton?: boolean;
  children: ReactNode;
  onHide?: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ title, hideButton = false, hide = false, children, onHide }) => {
  return (
    <Wrapper>
      <Title>
        <p>{title}</p>
        {hideButton && onHide && (
          <button
            className="hide__button"
            onClick={() => {
              onHide();
            }}
          >
            {hide ? <AiOutlineDown size={17} /> : <AiOutlineUp size={17} />}
          </button>
        )}
      </Title>
      {!hide && children}
    </Wrapper>
  );
};

export default SideNav;
