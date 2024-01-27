import { dbConnect } from "@/db/dbConfig";
import User from "@/models/user.model";
import { comparePassword } from "@/utils/passwordHash";
import { signToken } from "@/utils/token";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);
    // check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        status: "error",
        message: `User with ${email} does not exist`,
      });
    }
    console.log(user);
    // compare passwords
    const isMatched = await comparePassword(password, user.password);
    if (!isMatched) {
      return NextResponse.json({
        status: "error",
        message: "Invalid Password",
      });
    }
    console.log(isMatched, "pass match");

    // assign token
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({
      statusCode: 500,
      message: error.toString(),
    });
  }
}
