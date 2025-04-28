import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        message,
      },
    });

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Tiberius Contact Form <${process.env.EMAIL_USER}>`,
      to: 'exavier@tiberius.co.nz, nabi@tiberius.co.nz',
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nMessage: ${message}`,
      html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || '-'}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (mailErr) {
      console.error('Failed to send contact form email:', mailErr);
      // Do not fail the user submission if email fails
    }

    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 });
  }
}
