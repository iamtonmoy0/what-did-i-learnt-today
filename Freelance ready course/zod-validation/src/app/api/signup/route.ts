import dbConnect from "@/lib/dbConnect";

export async function POST(request: Request, response: Response) {
  await dbConnect();
  try {
	const{username,email,password}=await request.json()
  } catch (error) {
	console.log(error,"error registering user");
	return response.json{
		success:false,
		message:error
	}
  }
}
