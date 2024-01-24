import jwt from "jsonwebtoken";

export const signToken = async (userId: any) => {
  const token = await jwt.sign(userId, process.env.JWT_SECRET, {
    expiresIn: "6d",
  });
  return token;
};
