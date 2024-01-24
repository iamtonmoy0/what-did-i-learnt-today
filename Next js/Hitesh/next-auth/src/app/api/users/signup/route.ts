import { dbConnect } from "@/db/dbConfig";
import User from "@/models/user.model";
import { hashPassword } from "@/utils/passwordHash";
import { NextRequest, NextResponse } from "next/server";

// db connect
dbConnect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);

    const { username, email, password } = reqBody;

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      status: 200,
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    console.error("Error during user creation:", error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
