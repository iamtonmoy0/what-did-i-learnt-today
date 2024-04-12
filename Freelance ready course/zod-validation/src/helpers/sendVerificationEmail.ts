import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/apiResonse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "hello@gmail.com",
      to: email,
      subject: "verify code",
	  react:</>
    });
    return { success: true, message: "mail send successful" };
  } catch (error) {
    console.log(error, "error sending email");
    return { success: false, message: "failed to send mail" };
  }
}
