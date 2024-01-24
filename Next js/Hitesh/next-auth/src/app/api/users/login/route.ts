import { dbConnect } from "@/db/dbConfig";
import User from "@/models/user.model";
import { comparePassword } from "@/utils/passwordHash";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    // check if user exist
    const user = await User.findOne(email);
	if(!user){
		return NextResponse.json({
			status: 'error',
			message: `User with ${email} does not exist`
		})
	}
	// compare passwords
	const isMatched = await comparePassword(password,user.password);
	if (!isMatched) {
		return NextResponse.json({ status: 'error', message: 'Invalid Password' });
		}
		
  } catch (error: any) {
    return NextResponse.json({
      statusCode: 500,
      message: error.toString(),
    });
  }
}
