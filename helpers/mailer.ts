import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    service: 'hotmail',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    }
  
  });

  interface EmailParams  {
    to: string,
    subject: string,
    html?: string,
    text?: string
  }

  const sendEmail = async ({to, subject,html}: EmailParams ) => {

    try { 
  
        const result = await transporter.sendMail({
            from:'"ALoha"<rudenko13@hotmail.com>',
            to,
            subject,
            html
        })
        console.log({result})

        return {ok: true, message: "Excelente, email sent successfully"}
    } catch(err) {
        console.log(err)
        return { 
            ok: false,
            message: "There was a problem sending the email",
            err: err
        }
    }
  }

  export default sendEmail;