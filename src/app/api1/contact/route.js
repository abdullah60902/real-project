import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {

    const username = process.env.NEXT_PUBLIC_SMTP_USERNAME;
    const password = process.env.NEXT_PUBLIC_SMTP_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;


    console.log("Env keys:", username, password, myEmail);



    console.log("dealing with request")
    const formData = await request.formData()

    console.log("Receive Form Data: ", formData);

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const number = formData.get('number')



    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {

            user: username,
            pass: password
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Tendercare Management Web`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>number: ${number} </p>
            <p>Message: ${message} </p>

            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}