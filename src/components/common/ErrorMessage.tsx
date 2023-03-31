import React, { ReactNode } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Wrapper = styled.p`
  color: ${colors.red[400]};
  font-size: 14px;
  font-weight: 500;
`;

interface ErrorMessageProp {
  children: ReactNode;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProp> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default ErrorMessage;
