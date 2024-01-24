import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String,  },
    password: { type: String, required: true },
    email: { type: String, required: true },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
