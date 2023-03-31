import { LoginValues } from "../../types/auth";
import regex from "../regex";

export default function loginValidation({ userId, password }: LoginValues) {
  const errors: LoginValues = {};

  if (!userId) {
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
