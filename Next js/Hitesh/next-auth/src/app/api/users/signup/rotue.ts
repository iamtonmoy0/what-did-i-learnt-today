import { dbConnect } from "@/db/dbConfig";
import User from "@/models/user.model";
import { hashPassword } from "@/utils/passwordHash";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();
    console.log(username, email, password);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          error: "user already exist",
        },
        { status: 400 }
      );
    }
    // hash password
    const pass = await hashPassword(password);
    const newUser = await User.create(
      {
        username,
        email,
        password: pass,
      },
      { new: true }
    );

    return NextResponse.json({
      status: 200,
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    return NextResponse.json({ err: error }, { status: 500 });
  }
}

dbConnect();
