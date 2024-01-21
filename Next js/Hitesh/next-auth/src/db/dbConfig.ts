import mongoose from "mongoose";
export async function dbConnect() {
  try {
    await mongoose
      .connect(process.env.DB!)
      .then(() => {
        console.log("connected to mongodb");
      })
      .catch((err) => {
        throw new Error(err);
      });
  } catch (error) {
    console.log(error);
  }
}
