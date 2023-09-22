import { Resend } from 'resend';

import ThanksForContacting from '../../../components/emails/ThanksForContacting';

const resend = new Resend('re_NesBsUUz_EQmrSYWn1WoCL5h279X1Z6na');

export default async function handler(req, res) {
  console.log('🚀 ~ file: contact-us.js:15 ~ handler ~ req.body:', req.body);
  if (req.method === 'POST') {
    try {
      const emailRes = await resend.emails.send({
        from: 'support@lynktown.com',
        to: req.body.email,
        subject: 'Hello World',
        react: <ThanksForContacting username={req.body.name} />,
      });
      console.log(
        '🚀 ~ file: contact-us.js:17 ~ handler ~ emailRes:',
        emailRes
      );
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
