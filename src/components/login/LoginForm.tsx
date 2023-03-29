import React, { useContext } from "react";
import styled from "styled-components";
import ModalContext from "../../context/modal";
import colors from "../../styles/colors";
import CloseButton from "../common/CloseButton";

const Wrapper = styled.div`
  width: 40vw;
  height: 370px;
  padding: 40px 40px 80px;
  background-color: #fff;
  border-radius: 8px;

  .login__button-close {
    display: block;
    margin-left: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    outline: none;
    appearance: none;
    border: 1px solid ${colors.grey[400]};

    &:focus {
      border-color: ${colors.grey[600]};
    }
  }

  .login-form__button {
    margin-top: 20px;
    padding: 14px 10px;
    background-color: ${colors.orange[400]};
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: ${colors.orange[500]};
    }
  }
`;

const Title = styled.h1`
  margin-top: 17px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const LoginForm = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <Wrapper>
      <CloseButton
        className="login__button-close"
        onClick={() => {
          closeModal();
        }}
      />
      <Title>로그인</Title>
      <form action="">
        <input type="text" />
        <input type="password" />
        <button className="login-form__button">로그인</button>
      </form>
    </Wrapper>
  );
};

export default LoginForm;
