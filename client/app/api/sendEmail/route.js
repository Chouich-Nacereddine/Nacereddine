// import { NEXT_BODY_SUFFIX } from 'next/dist/lib/constants';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req, res) => {
  if (req.method === 'POST') {
    const data = await req.json();
    // console.log(data); 
    const { email, message } = data; 

    // console.log(email);

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD, 
      },
    });

    // Email message options
    const mailOptions = {
      from: email,
      to: 'nacreddinechouich0012@gmail.com',
      subject: 'Translingo.Meet Client messaged you',
      text: `Email: ${email}\nMessage: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully!' });
    } catch (error) {
      return NextResponse.json({ message: 'Error sending email.', error: error.message });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' });
  }
}