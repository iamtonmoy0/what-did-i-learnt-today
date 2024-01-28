import { dbConnect } from "@/db/dbConfig";
import { getToken } from "@/helpers/getToken";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function GET(request: NextRequest) {
  try {
    const id = await getToken(request);
    const user = await User.findOne({ _id: id }).select("-password");
    return NextResponse.json({
      status: "success",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json(error);
  }
}
