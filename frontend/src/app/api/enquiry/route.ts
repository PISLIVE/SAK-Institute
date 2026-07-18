import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, course, message, address2 } = data;

    // Honeypot check for spam bots
    if (address2) {
      console.log('Spam bot detected via honeypot in enquiry form.');
      return NextResponse.json({ success: true, simulated: true });
    }

    // Validate inputs
    if (!name || !email || !phone || !course) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure the transporter with environment variables
    // For this to work, you must add these variables to a .env.local file.
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // The admin email that receives the enquiries
      subject: `New Student Enquiry: ${name} (${course})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #0d9488;">New Student Enquiry</h2>
          <p>You have received a new enquiry from the SAK College website.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Course:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${course.toUpperCase()}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Message:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${message || 'N/A'}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // Save to Database
    await prisma.enquiry.create({
      data: {
        name,
        email,
        phone,
        course,
        message: message || null,
      }
    });

    // If no credentials are set, simulate success in dev, but log a warning.
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('⚠️ EMAIL_USER or EMAIL_PASS not set in .env.local. Simulating email success.');
      console.log('--- ENQUIRY DATA ---', data);
      
      // We simulate network delay just like before, but this time from the real API route
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, simulated: true });
    }

    // Send the actual email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error sending enquiry email:', error);
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 });
  }
}
