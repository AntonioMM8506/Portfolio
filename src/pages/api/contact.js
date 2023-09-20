import nodemailer from "nodemailer";

//Configuration for the nodemailer service
export default async function contactAPI(req, res){
    const { name, email, message } = req.body; //retrive the data from the body POST
    const user = `${process.env.EMAIL_USER}`;

    //Configuration for the transporter, the supplier from the service to send the email
    //any smtp provider will do fine, like mailinator, yopmail, or gmail
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: user,
            pass: `${process.env.EMAIL_PASS}`
        }
    });

    //Try to send a message
    //* from, the mail used for the transporter configuration
    //* to, the target email address, who is going to receive the email
    //* replyTo, because the data is retrieved trough a form that requests an email, then the replyTo will use
    //  email in the case the user wants to reply the email.
    //* subject, the reason of the email, is also retrieved from the form
    //* html, its a form to customize the message, here any basic html code is eligable
    try{
        const mail = await transporter.sendMail({
            from: user,
            to: `${process.env.EMAIL_PORTFOLIO}`,
            replyTo: email,
            subject: `Contact form Submission from: ${name}`,
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
            `
        });

        //console.log("Message sent:", mail.messageId);
        return res.status(200).json({message: "success"});

    } catch(error){ //In the case we receive an error
        console.error(error);
        res.status(500).json({message: "Error sending the email. Message not sent"})
    }

}//End of contactAPI
