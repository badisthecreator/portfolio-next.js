"use server";

import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "@/lib/utils";
import { contactData } from "@/lib/data";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!validateString(senderEmail, 500))
    return { error: "Invalid sender email" };
  if (!validateString(message, 5000))
    return { error: "Invalid message" };

  // Simple HTML email directly in the server action
  const html = `
    <div style="font-family: sans-serif; line-height: 1.5; padding: 20px; background-color: #f5f5f5;">
      <h2>You received a new message from your contact form</h2>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr />
      <p><strong>Sender Email:</strong> ${senderEmail}</p>
    </div>
  `;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: contactData.email,
      subject: "New Contact Form Message",
      replyTo: senderEmail,
      html,
    });

    return { success: true };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  return { data: null };
};
