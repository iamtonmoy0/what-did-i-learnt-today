import { Brand } from "./helpers/brand";

type Valid<T> = Brand<T, "Valid">;

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

const validatePassword = (values: PasswordValues) => {
  if (values.password === values.confirmPassword) {
    return values;
  } else {
    throw new Error("Password did not matched");
  }
};

