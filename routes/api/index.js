const router = require("express").Router();
const inquiryRoutes = require("./inquiries");
const nodemailer = require('nodemailer');

// Inquiry routes
router.use("/inquiries", inquiryRoutes);
router.post('/contact', (req, res) => {
    console.log(req.body);
    'use strict';
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul> 
      <li>First Name: ${req.body.firstName}</li>
      <li>Last Name: ${req.body.lastName}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            // host: 'smtp.aol.com',
            // port: 587,
            // secure: false, // true for 465, false for other ports
            service: "AOL",
            auth: {
                user: "waynesong21@aol.com", // generated ethereal user
                pass: "" // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"New Client" <waynesong21@aol.com>', // sender address
            to: 'Therapist, waynesong21@gmail.com', // list of receivers
            subject: 'New Contact Request', // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
});

module.exports = router;
