import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ModalContext from "../../context/modal";
import colors from "../../styles/colors";
import CloseButton from "../common/CloseButton";
import { LoginValues } from "../../types/auth";
import loginValidation from "../../utils/validation/loginValidation";
import axiosInstance from "../../utils/axios";
import ErrorMessage from "../common/ErrorMessage";

const Wrapper = styled.div`
  width: 400px;
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

const InputContainer = styled.div`
  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    outline: none;
    appearance: none;
    border: 1px solid ${colors.grey[400]};

    &:focus {
      border-color: ${colors.grey[600]};
    }
  }

  .error-message {
    margin-top: 4px;
  }
`;

const LoginForm = () => {
  const { closeModal } = useContext(ModalContext);
  const inputRef = useRef<{
    userId: HTMLInputElement | null;
    password: HTMLInputElement | null;
  }>({
    userId: null,
    password: null,
  });
  const [errors, setErrors] = useState<LoginValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    if (!inputRef.current.userId || !inputRef.current.password) return;

    e.preventDefault();

    const { userId, password } = inputRef.current;
    setErrors(loginValidation({ userId: userId.value, password: password.value }));
  };

  const requestLogin = async () => {
    try {
      axiosInstance.post("login", {
        id: inputRef.current.userId?.value ?? "",
        password: inputRef.current.userId?.value ?? "",
      });
    } catch (error) {}
  };

  useEffect(() => {
    if (isSubmitting) {
      if (errors && Object.keys(errors).length === 0) {
        requestLogin();
      }

      setIsSubmitting(false);
    }
  }, [errors]);

  return (
    <Wrapper>
      <CloseButton
        className="login__button-close"
        onClick={() => {
          closeModal();
        }}
      />
      <Title>로그인</Title>
      <form noValidate onSubmit={handleSubmit}>
        <InputContainer>
          <input type="text" ref={(el) => (inputRef.current.userId = el)} placeholder="아이디를 입력해주세요." />
          {errors?.userId && <ErrorMessage className="error-message">{errors.userId}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <input type="password" ref={(el) => (inputRef.current.password = el)} placeholder="비밀번호를 입력해주세요." />
          {errors?.password && <ErrorMessage className="error-message">{errors.password}</ErrorMessage>}
        </InputContainer>
        <button className="login-form__button">로그인</button>
      </form>
    </Wrapper>
  );
};

export default LoginForm;
