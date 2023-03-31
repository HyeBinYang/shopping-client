import React, { useContext, useRef } from "react";
import styled from "styled-components";
import ModalContext from "../../context/modal";
import colors from "../../styles/colors";
import CloseButton from "../common/CloseButton";
import axiosInstance from "../../utils/axios";
import ErrorMessage from "../common/ErrorMessage";
import { useEffect } from "react";
import { SignupValues } from "../../types/auth";
import { useState } from "react";
import signupValidation from "../../utils/validation/signupValidation";

const Wrapper = styled.div`
  width: 480px;
  padding: 30px 40px 60px;
  background-color: #fff;
  border-radius: 8px;

  .signup__button-close {
    display: block;
    margin-left: auto;
  }

  .signup-form__container {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }

  .signup-button-submit {
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

    &:disabled {
      opacity: 0.5;
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
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  input {
    padding: 10px;
    font-size: 16px;
    outline: none;
    appearance: none;
    border: 1px solid ${colors.grey[400]};

    &:focus {
      border-color: ${colors.grey[600]};
    }

    .error-message {
      margin-top: 4px;
    }
  }
`;

interface InputRefValue {
  name: null | HTMLInputElement;
  email: null | HTMLInputElement;
  id: null | HTMLInputElement;
  password: null | HTMLInputElement;
  passwordConfirm: null | HTMLInputElement;
}

const SignupForm = () => {
  const { closeModal } = useContext(ModalContext);
  const inputRef = useRef<InputRefValue>({
    name: null,
    email: null,
    id: null,
    password: null,
    passwordConfirm: null,
  });
  const [errors, setErrors] = useState<SignupValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClickRegister = () => {
    setIsSubmitting(true);
    const { id, name, email, password, passwordConfirm } = inputRef.current;
    setErrors(
      signupValidation({
        userId: id?.value,
        name: name?.value,
        email: email?.value,
        password: password?.value,
        passwordConfirm: passwordConfirm?.value,
      })
    );
  };

  const requestSignup = () => {
    axiosInstance
      .post("register/add", {
        name: inputRef.current.name?.value || "",
        email: inputRef.current.email?.value || "",
        userId: inputRef.current.id?.value || "",
        password: inputRef.current.password?.value || "",
        passwordConfirm: inputRef.current.passwordConfirm?.value || "",
      })
      .then((res) => {
        alert("회원가입이 완료되었습니다.");
        closeModal();
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (isSubmitting) {
      if (errors && Object.keys(errors).length === 0) {
        requestSignup();
      }

      setIsSubmitting(false);
    }
  }, [errors]);

  return (
    <Wrapper>
      <CloseButton
        className="signup__button-close"
        onClick={() => {
          closeModal();
        }}
      />
      <Title>회원가입</Title>
      <div className="signup-form__container">
        <InputContainer>
          <label htmlFor="signup-name">이름</label>
          <input id="signup-name" type="text" placeholder="이름을 입력해주세요" ref={(el) => (inputRef.current.name = el)} />
          {errors?.name && <ErrorMessage className="error-message">{errors.name}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <label htmlFor="signup-email">이메일</label>
          <input id="signup-email" type="text" placeholder="이메일을 입력해주세요" ref={(el) => (inputRef.current.email = el)} />
          {errors?.email && <ErrorMessage className="error-message">{errors.email}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <label htmlFor="signup-id">아이디</label>
          <input id="signup-id" type="text" placeholder="소문자, 숫자 포함 8 ~ 16자리" ref={(el) => (inputRef.current.id = el)} />
          {errors?.userId && <ErrorMessage className="error-message">{errors.userId}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <label htmlFor="signup-password">비밀번호</label>
          <input
            id="signup-password"
            type="password"
            placeholder="소문자, 숫자, 특수문자(!@#$%^&*) 포함 8 ~ 16자리"
            ref={(el) => (inputRef.current.password = el)}
          />
          {errors?.password && <ErrorMessage className="error-message">{errors.password}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <label htmlFor="signup-confirm">비밀번호 확인</label>
          <input
            id="signup-confirm"
            type="password"
            placeholder="소문자, 숫자, 특수문자(!@#$%^&*) 포함 8 ~ 16자리"
            ref={(el) => (inputRef.current.passwordConfirm = el)}
          />
          {errors?.passwordConfirm && <ErrorMessage className="error-message">{errors.passwordConfirm}</ErrorMessage>}
        </InputContainer>
        <button className="signup-button-submit" disabled={isSubmitting} onClick={handleClickRegister}>
          가입하기
        </button>
      </div>
    </Wrapper>
  );
};

export default SignupForm;
