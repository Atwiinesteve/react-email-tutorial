import CustomEMailTemplate from "@/app/emails/CustomEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export async function GET() {
	try {
		const data = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "atwiinestephen123@gmail.com",
			subject: "Welcome to our app",
			react: CustomEMailTemplate({
				title: "Brighten your home for less!",
				content:
					"Spring is in full swing, and what better way to celebrate the season of new beginnings than with fresh flowers? Our beautiful collection of blooms is now available at discounted prices that you don't want to miss!",
				link: "#",
				image:
					"https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
				username: "Atwiine Stephen",
			}),
		});
		return NextResponse.json(data);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error });
	}
}
