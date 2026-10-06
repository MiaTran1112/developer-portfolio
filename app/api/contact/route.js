import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message } = payload ?? {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const senderName = name.trim();
    const senderEmail = email.trim();
    const senderMessage = message.trim();

    if (
      senderName.length > 100 ||
      senderEmail.length > 100 ||
      senderMessage.length > 500 ||
      /[\r\n]/.test(senderName) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)
    ) {
      return NextResponse.json(
        { success: false, message: "Please provide valid contact details." },
        { status: 400 }
      );
    }

    const emailAddress = process.env.EMAIL_ADDRESS;
    const appPassword = process.env.GMAIL_PASSKEY;

    if (!emailAddress || !appPassword) {
      console.error("Contact email credentials are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email is currently unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailAddress,
        pass: appPassword,
      },
    });

    await transporter.sendMail({
      from: {
        name: "Portfolio",
        address: emailAddress,
      },
      to: emailAddress,
      replyTo: senderEmail,
      subject: `Portfolio message from ${senderName}`,
      text: [
        `Name: ${senderName}`,
        `Email: ${senderEmail}`,
        "",
        "Message:",
        senderMessage,
      ].join("\n"),
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, message: "Invalid request." },
        { status: 400 }
      );
    }

    console.error("Contact email failed:", error.message);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}