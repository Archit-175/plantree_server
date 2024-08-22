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
  const { name, email, phone, country, message,plant_quantity_oak,plant_quantity_maple,plant_quantity_pine } = req.body;
    console.log(req.body);
    total = plant_quantity_oak * 10 + plant_quantity_maple * 15 + plant_quantity_pine * 12
    // Send thank you email to donor
    // <h2>Thank You for Your Donation!</h2>
    // <p>Dear ${name},</p>
    // <p>We greatly appreciate your generous donation of $${total} to our tree planting initiative. Your contribution will help us make the world a greener place.</p>
    // <p>Thank you for your support!</p>
    // <p>Best regards,</p>
    // <p>The Plant Donation Team</p>
    const mailOptions = {
        from: 'crawlers175@gmail.com',
      to: email,
      subject: "Thank You for Your Donation",
      html: `
      
        <!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"/><!--<![endif]-->
<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			line-height: 0;
			font-size: 75%;
		}

		@media (max-width:670px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

		}
	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>
<body class="body" style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; background-color: #000000; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;" width="650">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<div class="spacer_block block-1" style="height:60px;line-height:60px;font-size:1px;"> </div>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 216.66666666666666px;"><a href="https://crawlers-one.vercel.app/index.html#" style="outline:none" tabindex="-1" target="_blank"><img height="auto" src="https://i.im.ge/2024/08/20/fixkTY.logo-removebg-preview.png" style="display: block; height: auto; border: 0; width: 100%;" width="216.66666666666666"/></a></div>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
<div class="spacer_block block-1" style="height:60px;line-height:60px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; background-repeat: no-repeat; color: #000000; background-color: #3b8f5d; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4491/greenpeace-bg2.jpg'); width: 650px; margin: 0 auto;" width="650">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:15px;padding-left:50px;padding-right:50px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Bitter', Georgia, Times, 'Times New Roman', serif; font-size: 50px; font-weight: normal; letter-spacing: -2px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 73.2px;" ><span class="tinyMce-placeholder" style="word-break: break-word;"><br/>Thank You For Planting Tree</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:25px;padding-left:50px;padding-right:50px;padding-top:10px;">
<div style="color:#ffffff;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
<p style="margin: 0;"> </p>
<p style="margin: 0;"> Dear ${name},
    .We greatly appreciate your generous donation of $${total} to our tree planting initiative. Your contribution will help us make the world a greener place.
    Thank you for your support!</p>
<p style="margin: 0;"> </p>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-repeat: no-repeat; color: #000000; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4491/experience-bg.jpg'); width: 650px; margin: 0 auto;" width="650">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:15px;padding-left:50px;padding-right:50px;padding-top:20px;text-align:center;width:100%;">
<h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: Georgia, Times, 'Times New Roman', serif; font-size: 29px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 34.8px;"><span class="tinyMce-placeholder" style="word-break: break-word;"></span></h2>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:25px;padding-left:50px;padding-right:50px;padding-top:10px;">
<div style="color:#ffffff;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
<p style="margin: 0; word-break: break-word;">Crawlers are dedicated to raising awareness about upcoming forest conservation efforts and providing information about forests and their wildlife. We also offer a platform for community members to join, share their stories, and contribute to blogs. Additionally, our site helps people find job opportunities in the forest sector and apply for positions, making it easier for them to find employment.</p>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
<div align="center" class="alignment"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://crawlers-one.vercel.app/index.html#" style="height:52px;width:193px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#ffffff">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#3b8f5d;font-family:Georgia, 'Times New Roman', serif;font-size:16px">
<![endif]--><a href="https://crawlers-one.vercel.app/index.html#" style="background-color:#ffffff;border-bottom:0px solid #3B8F74;border-left:0px solid #3B8F74;border-radius:0px;border-right:0px solid #3B8F74;border-top:0px solid #3B8F74;color:#3b8f5d;display:inline-block;font-family:'Bitter', Georgia, Times, 'Times New Roman', serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:10px;padding-top:10px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;" target="_blank"><span style="word-break: break-word; padding-left: 35px; padding-right: 35px; font-size: 16px; display: inline-block; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Visit our website</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 650px; margin: 0 auto;" width="650">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:20px;padding-left:50px;padding-right:50px;padding-top:20px;text-align:center;width:100%;">
<h2 style="margin: 0; color: #6fb67c; direction: ltr; font-family: Georgia, Times, 'Times New Roman', serif; font-size: 22px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 26.4px;"><strong>Become a volunteer? Call Us (+91) 9978006612</strong></h2>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; background-size: auto;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; background-color: #ffffff; color: #000000; width: 650px; margin: 0 auto;" width="650">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 260px;"><img alt="Renewable Energy" height="auto" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4491/project1.png" style="display: block; height: auto; border: 0; width: 100%;" title="Renewable Energy" width="260"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:50px;padding-right:50px;padding-top:20px;text-align:center;width:100%;">
<h3 style="margin: 0; color: #3b8f5d; direction: ltr; font-family: 'Bitter', Georgia, Times, 'Times New Roman', serif; font-size: 16px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 19.2px;"><span class="tinyMce-placeholder" style="word-break: break-word;">The forest is alive</span></h3>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:15px;text-align:center;width:100%;">
<h2 style="margin: 0; color: #297f44; direction: ltr; font-family: 'Bitter', Georgia, Times, 'Times New Roman', serif; font-size: 18px; font-weight: 500; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 21.599999999999998px;"><span class="tinyMce-placeholder" style="word-break: break-word;">beauty is not just seen, it is felt in the quiet moments</span></h2>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
<div align="center" class="alignment"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://crawlers-one.vercel.app/Gallary/Gallary.html" style="height:52px;width:192px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#6fb67c">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:Georgia, 'Times New Roman', serif;font-size:16px">
<![endif]--><a href="https://crawlers-one.vercel.app/Gallary/Gallary.html" style="background-color:#6fb67c;border-bottom:0px solid #3B8F74;border-left:0px solid #3B8F74;border-radius:0px;border-right:0px solid #3B8F74;border-top:0px solid #3B8F74;color:#ffffff;display:inline-block;font-family:'Bitter', Georgia, Times, 'Times New Roman', serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:10px;padding-top:10px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;" target="_blank"><span style="word-break: break-word; padding-left: 35px; padding-right: 35px; font-size: 16px; display: inline-block; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Visit Our Gallary</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px">
<div style="max-width: 260px;"><img alt="Protect Nature" height="auto" src="https://i.im.ge/2024/08/20/fiCdWY.FrvLN1KXoAQ7qcl.jpeg" style="display: block; height: auto; border: 0; width: 100%;" title="Protect Nature" width="260"/></div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:50px;padding-right:50px;padding-top:20px;text-align:center;width:100%;">
<h3 style="margin: 0; color: #3b8f5d; direction: ltr; font-family: 'Bitter', Georgia, Times, 'Times New Roman', serif; font-size: 16px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 19.2px;"><span class="tinyMce-placeholder" style="word-break: break-word;">Looking For Job??</span></h3>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:20px;text-align:center;width:100%;">
<h2 style="margin: 0; color: #297f44; direction: ltr; font-family: 'Bitter', Georgia, Times, 'Times New Roman', serif; font-size: 18px; font-weight: 500; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 21.599999999999998px;"><span class="tinyMce-placeholder" style="word-break: break-word;">Here we are </span></h2>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
<div align="center" class="alignment"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://job-applicatoin.vercel.app/" style="height:52px;width:150px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#6fb67c">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:Georgia, 'Times New Roman', serif;font-size:16px">
<![endif]--><a href="https://job-applicatoin.vercel.app/" style="background-color:#6fb67c;border-bottom:0px solid #3B8F74;border-left:0px solid #3B8F74;border-radius:0px;border-right:0px solid #3B8F74;border-top:0px solid #3B8F74;color:#ffffff;display:inline-block;font-family:'Bitter', Georgia, Times, 'Times New Roman', serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:10px;padding-top:10px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;" target="_blank"><span style="word-break: break-word; padding-left: 35px; padding-right: 35px; font-size: 16px; display: inline-block; letter-spacing: normal;"><span style="word-break: break-word; line-height: 32px;">Apply Now</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-repeat: no-repeat; color: #000000; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4491/a510d3a3-aaf8-4339-9ddc-0ae7ff2c0daf.jpg'); background-position: center top; width: 650px; margin: 0 auto;" width="650">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:15px;padding-left:50px;padding-right:50px;padding-top:20px;text-align:center;width:100%;">
<h2 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; font-size: 30px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 36px;"><strong><br/><br/>Explore and Save World <br/>With Us!<br/><br/><br/></strong></h2>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;" width="650">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
<div class="spacer_block block-1" style="height:60px;line-height:60px;font-size:1px;"> </div>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<table border="0" cellpadding="0" cellspacing="0" class="social_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;text-align:center;">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="180px">
<tr>
<td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com" target="_blank"><img alt="Facebook" height="auto" src="https://i.im.ge/2024/08/20/fiCFyX.facebook2x.png" style="display: block; height: auto; border: 0;" title="facebook" width="32"/></a></td>
<td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com" target="_blank"><img alt="Linkedin" height="auto" src="https://i.im.ge/2024/08/20/fiCXYF.linkedin2x.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
<td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com" target="_blank"><img alt="Instagram" height="auto" src="https://i.im.ge/2024/08/20/fiCSmM.instagram2x.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
<td style="padding:0 2px 0 2px;"><a href="https://www.youtube.com/" target="_blank"><img alt="YouTube" height="auto" src="https://i.im.ge/2024/08/20/fiCl4K.youtube2x.png" style="display: block; height: auto; border: 0;" title="YouTube" width="32"/></a></td>
<td style="padding:0 2px 0 2px;"><a href="https://telegram.org" target="_blank"><img alt="Telegram" height="auto" src="https://i.im.ge/2024/08/20/fiCoU6.telegram2x.png" style="display: block; height: auto; border: 0;" title="Telegram" width="32"/></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
<div class="spacer_block block-1" style="height:60px;line-height:60px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 650px; margin: 0 auto;" width="650">
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><!-- End -->
</body>
</html>
      `
    };


    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //       console.log(error);
    //       res.status(500).send('Error sending email');
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //       res.status(200).send('Receipt email sent');
         
    //     }
    //   });
	
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
		  console.log(error);
		  res.status(500).send('Error sending email'); // Redirect to an error page
		} else {
		  console.log('Email sent: ' + info.response);
		  res.status(200).redirect('http://127.0.0.1:5500/'); // Redirect to a success page
		}
	  });
	  
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './', 'plantree.html'));
      });
      
      const PORT = process.env.PORT || 3002;
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
      
