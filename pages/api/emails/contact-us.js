import { Resend } from 'resend';

import ThanksForContacting from '../../../components/emails/ThanksForContacting';

const resend = new Resend('re_NesBsUUz_EQmrSYWn1WoCL5h279X1Z6na');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const emailRes = await resend.emails.send({
        from: 'LynkTown Support <support@lynktown.com>',
        to: req.body.email,
        subject: 'Thank you contacting LynkTown',
        react: <ThanksForContacting username={req.body.name} />,
      });
      await resend.emails.send({
        from: 'LynkTown Support <support@lynktown.com>',
        to: 'support@lynktown.com',
        subject: 'Thank you contacting LynkTown',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
    <style>
        /* Inline CSS for compatibility */
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
        }
        h1 {
            color: #333333;
        }
        p {
            color: #555555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Form Submission</h1>
        <p>Hello [Owner's Name],</p>
        <p>You have received a new form submission with the following details:</p>
        
        <!-- Insert your form submission data here -->
        <ul>
            <li><strong>Name:</strong> ${req.body.name}</li>
            <li><strong>Email:</strong> ${req.body.email}</li>
            <li><strong>Phone:</strong> ${req.body.phone}</li>
            <li><strong>Message:</strong> ${req.body.message}</li>
        </ul>
        
        <p>Thank you for your attention.</p>
        
        <p>Best regards,</p>
        <p>Your Name</p>
    </div>
</body>
</html>`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res
        .status(500)
        .json({ error: 'failed to sent the email try after some time' });
    }
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
