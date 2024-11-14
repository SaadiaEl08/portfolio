import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();
export const send_email = async (req, res) =>  {
    let {email, message, name} =req.body;
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: process.env.MAIL_SECURE === 'true', 
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Mail options
        const mailOptions = {
            from: email, 
            to: process.env.EMAIL,
            subject: `Portfolio email : from ${name}`,
            text: `Sender Name: ${name}\n Sender Email: ${email}\n the Message: ${message}`,
        };
        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }


};

