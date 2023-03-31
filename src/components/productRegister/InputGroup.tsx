import React, { ReactNode } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Wrapper = styled.div<{ center: boolean }>`
  display: flex;
  align-items: ${({ center }) => center && "center"};
`;

const LabelWrapper = styled.div`
  width: 10.5rem;
  display: flex;

  p {
    font-size: 20px;
  }
`;

const Required = styled.span`
  font-size: 20px;
  color: ${colors.red[500]};
`;

const ContentWrapper = styled.div`
  flex: 1 1 0%;
`;

interface InputGroupProps {
  title?: string;
  required?: boolean;
  center?: boolean;
  children?: ReactNode;
}

const InputGroup = ({ children, center = false }: Partial<InputGroupProps>) => {
  return <Wrapper center={center}>{children}</Wrapper>;
};

const Label = ({ title, required }: Partial<InputGroupProps>) => {
  return (
    <LabelWrapper>
      <p>{title}</p>
      {required && <Required>*</Required>}
    </LabelWrapper>
  );
};

const Content = ({ children }: Partial<InputGroupProps>) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

InputGroup.Label = Label;
InputGroup.Content = Content;

export default InputGroup;
