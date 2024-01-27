import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      status: "success",
      message: "logout successful",
    });
    response.cookies.set("token", "", { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: error,
    });
  }
}
