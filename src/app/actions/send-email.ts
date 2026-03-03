"use server";

import { Resend } from "resend";
import { ContactEmail } from "@/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailInput {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(
  input: SendEmailInput
): Promise<{ success: boolean; error?: string }> {
  const { name, email, message } = input;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["mostafa.nassr88@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send email." };
    }

    return { success: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}
