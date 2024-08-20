const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './')));
// Create a transporter using Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  port: 465,
  auth: {
    user: 'crawlers175@gmail.com',
    pass: 'zrkk pmke bzvr fzay'   }
});

app.post('/submit', async (req, res) => {
  const { name, email, phone, country, message,plant_quantity_oak } = req.body;
    console.log(req.body);

    // Send thank you email to donor
    const mailOptions = {
        from: 'crawlers175@gmail.com',
      to: email,
      subject: "Thank You for Your Donation",
      html: `
        <h2>Thank You for Your Donation!</h2>
        <p>Dear ${name},</p>
        <p>We greatly appreciate your generous donation of $${plant_quantity_oak} to our tree planting initiative. Your contribution will help us make the world a greener place.</p>
        <p>Thank you for your support!</p>
        <p>Best regards,</p>
        <p>The Plant Donation Team</p>
      `
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Receipt email sent');
         
        }
      });
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './', 'plantree.html'));
      });
      
      const PORT = process.env.PORT || 3002;
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
      
