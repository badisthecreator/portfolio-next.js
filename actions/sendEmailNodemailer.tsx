"use server";

import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "@/lib/utils";
import { contactData } from "@/lib/data";
import ReactDOMServer from "react-dom/server";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500))
    return { error: "Invalid sender email" };
  if (!validateString(message, 5000))
    return { error: "Invalid message" };

  const html = ReactDOMServer.renderToStaticMarkup(
    <ContactFormEmail message={message as string} senderEmail={senderEmail as string} />
  );

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
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      html,
    });

    return { success: true };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return {
    data : "Something is off",
  };
};
