import sgMail from "@sendgrid/mail"; // SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export const contactForm = (req, res) => {
    const {email, name, message, subject} = req.body;
    let mailList = [process.env.CONTACT_CC2, process.env.CONTACT_CC1, process.env.CONTACT_CC3];
    console.log(mailList)
    const emailData = {
        to: mailList,
        from: process.env.CONTACT_MAIL,
        subject: subject,
        text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
        html: `
            <h4>Email received from contact form:</h4>
            <p>Sender name: ${name}</p>
            <p>Sender email: ${email}</p>
            <p>Sender message: ${message}</p>
            <hr />
            <p><strong>This email may contain sensetive information</strong></p>
            <p>${process.env.CLIENT_URL}</p>
        `,
    };

    sgMail.send(emailData).then((sent) => {
        return res.json({
            success: true,
        });
    });
};