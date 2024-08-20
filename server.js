const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, './')));

// Nodemailer setup with Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    auth: {
      user: 'crawlers175@gmail.com',
    pass: 'zrkk pmke bzvr fzay'   }

});

app.post('/submit', (req, res) => {
    const { name, email, phone, country, message, totalDonation } = req.body;

    // Create email content
    const mailOptions = {
        from: 'crawlers175@gmail.com',
        to: email,
        subject: "Thank You for Your Donation",
        html: `
            <h2>Thank You for Your Donation!</h2>
            <p>Dear ${name},</p>
            <p>We greatly appreciate your generous donation of $${totalDonation} to our tree planting initiative. Your contribution will help us make the world a greener place.</p>
            <p>Thank you for your support!</p>
            <p>Best regards,</p>
            <p>The Plant Donation Team</p>
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true, message: 'Receipt email sent' });
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'plantree.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
