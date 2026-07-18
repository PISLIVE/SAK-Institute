import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      dob, 
      gender,
      qualification,
      stream,
      percentage,
      passingYear,
      institution,
      course,
      source
    } = data;

    // Minimal validation
    if (!firstName || !email || !phone || !course) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `🚨 New Application: ${firstName} ${lastName} for ${course.toUpperCase()}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px; max-width: 800px; margin: 0 auto;">
          <div style="background: #0d9488; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Admission Application Received</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">SAK College of Nursing</p>
          </div>
          
          <div style="padding: 20px; background: #f8fafc;">
            <h3 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 5px;">1. Personal Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; width: 40%;"><strong>Full Name:</strong></td>
                <td style="padding: 8px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Course Applied For:</strong></td>
                <td style="padding: 8px; font-weight: bold; color: #0d9488;">${course.toUpperCase()}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Date of Birth:</strong></td>
                <td style="padding: 8px;">${dob}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Gender:</strong></td>
                <td style="padding: 8px;">${gender}</td>
              </tr>
            </table>

            <h3 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 5px; margin-top: 25px;">2. Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; width: 40%;"><strong>Email:</strong></td>
                <td style="padding: 8px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Phone:</strong></td>
                <td style="padding: 8px;">${phone}</td>
              </tr>
            </table>

            <h3 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 5px; margin-top: 25px;">3. Academic Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; width: 40%;"><strong>Highest Qualification:</strong></td>
                <td style="padding: 8px;">${qualification}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Stream / Major:</strong></td>
                <td style="padding: 8px;">${stream}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Percentage:</strong></td>
                <td style="padding: 8px;">${percentage}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Passing Year:</strong></td>
                <td style="padding: 8px;">${passingYear}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Institution:</strong></td>
                <td style="padding: 8px;">${institution}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Source:</strong></td>
                <td style="padding: 8px;">${source}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107; color: #856404;">
            <strong>Action Required:</strong> Please verify the student's documents and initiate the admission follow-up process.
          </div>
        </div>
      `,
    };

    // If no credentials, simulate success
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('⚠️ EMAIL_USER or EMAIL_PASS not set. Simulating Application API success.');
      console.log('--- APPLICATION DATA ---', data);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate processing time
      
      // Generate a fake application ID
      const appId = 'SAK-' + Math.floor(100000 + Math.random() * 900000);
      
      return NextResponse.json({ 
        success: true, 
        simulated: true,
        applicationId: appId
      });
    }

    // Send actual email
    await transporter.sendMail(mailOptions);
    
    // Generate true application ID
    const appId = 'SAK-' + Math.floor(100000 + Math.random() * 900000);
    
    return NextResponse.json({ 
      success: true,
      applicationId: appId
    });
    
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ error: 'Failed to process application' }, { status: 500 });
  }
}
