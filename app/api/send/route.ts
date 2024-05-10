import { EmailTemplate } from "@/components/emailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  const {username, title, email, content} = await request.json();
  try {
    const {data, error} = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["gako0918@gmail.com"],
      subject: title,
      react: EmailTemplate({
        username,
        email,
        content,
      }) as React.ReactElement,
    })
    if(error) {
      return NextResponse.json({error});
    }
    return NextResponse.json({data});
  } catch (error) {
    console.error(error);
  }
}
