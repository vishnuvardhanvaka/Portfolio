"use server";

const nodemailer = require("nodemailer");

interface SendMailProps {
    userName: string;
    userEmail: string;
    message: string;
}

export const sendMail = async ({ userName, userEmail, message }: SendMailProps) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: "vakavishnuvardhangowd@gmail.com",
            replyTo: userEmail, // User's email to reply directly to them
            subject: `📬 Contact Request from ${userName}: Inquiry via Your Portfolio`,
            html: `<p>🤝 You have received a new message from: <br>Name: <b>${userName}</b><br>Email: <b>${userEmail}</b><br></p><p>🗨️Message: <br><b>${message}</b></p>`, // HTML body
        };

        const info = await transporter.sendMail(mailOptions);
        return { status: true, message: "Email sent: " + info.response };
    } catch (error: any) {
        return { status: false, error: error.message };
    }
};
