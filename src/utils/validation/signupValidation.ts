import { SignupValues } from "../../types/auth";
import regex from "../regex";

export default function signupValidation({ userId = "", name = "", email = "", password = "", passwordConfirm = "" }: SignupValues) {
  const errors: SignupValues = {};

  if (!name) {
    errors.name = "이름을 입력해주세요";
  } else if (!regex.email.test(email)) {
    errors.email = "이메일이 유효하지 않습니다.";
  } else if (!userId) {
    errors.userId = "아이디를 입력해주세요.";
  } else if (!regex.id.test(userId)) {
    errors.userId = "입력된 아이디가 유효하지 않습니다.";
  } else if (!password) {
    errors.password = "비밀번호를 입력해주세요.";
  } else if (!regex.password.test(password)) {
    errors.password = "비밀번호가 유효하지 않습니다.";
  }

  return errors;
}
