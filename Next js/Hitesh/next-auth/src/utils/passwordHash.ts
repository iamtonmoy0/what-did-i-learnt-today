import bcrypt from "bcryptjs";

export const hashPassword = async (pass: any) => {
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(pass, salt);
  return hashPass;
};

export const comparePassword = async (
  normalPassword: any,
  hashPassword: any
) => {
  const isValid = await bcrypt.compare(normalPassword, hashPassword);
  return isValid;
};
