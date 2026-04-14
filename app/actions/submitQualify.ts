"use server";

import { Resend } from "resend";

export type FormState = {
  status: "idle" | "success" | "error";
  error?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = ["julianalert@gmail.com", "clement.bernard21@gmail.com"];

export async function submitQualify(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const businessType = formData.get("businessType") as string;
  const challenge = (formData.get("challenge") as string)?.trim();
  const teamSize = formData.get("teamSize") as string;
  const hoursLost = formData.get("hoursLost") as string;

  if (!name || !email || !company || !businessType || !challenge || !teamSize || !hoursLost) {
    return { status: "error", error: "Please fill in all fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", error: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL ?? "Vision <onboarding@resend.dev>",
      to: RECIPIENTS,
      subject: `New qualification submission: ${name} from ${company}`,
      text: [
        "New qualification form submission",
        "",
        `Name:              ${name}`,
        `Email:             ${email}`,
        `Company:           ${company}`,
        `Business type:     ${businessType}`,
        `Team size:         ${teamSize}`,
        `Hours lost / week: ${hoursLost}`,
        "",
        "Biggest challenge:",
        challenge,
      ].join("\n"),
    });

    return { status: "success" };
  } catch (err) {
    console.error("[submitQualify] Resend error:", err);
    return { status: "error", error: "Something went wrong. Please try again." };
  }
}
