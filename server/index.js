const express = require('express');
const app = express();
const port = 1214;
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASSWORD,
		clientId: process.env.OAUTH_CLIENTID,
		clientSecret: process.env.OAUTH_CLIENT_SECRET,
		refreshToken: process.env.OAUTH_REFRESH_TOKEN
	}
});

app.get('/', (req, res) => {
	transporter.sendMail(
		{
			from: 'visioninc12@gmail.com',
			to: req.query.email,
			subject: 'Contact Us',
			text: 'Hi! Thank you for reaching out to us, someone will get to you shortly'
		},
		function(err, data) {
			if (err) {
				console.log('Error ' + err);
			} else {
				console.log('Email sent successfully');
				return res.status(201).json({ message: 'email sent successfully' });
			}
		}
	);
});

app.listen(port, () => {
	console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
