import { Resend } from 'resend';

import ThanksForContacting from '../../../components/emails/ThanksForContacting';
import FromSubmit from '../../../components/emails/FormSubmit';

const resend = new Resend('re_NesBsUUz_EQmrSYWn1WoCL5h279X1Z6na');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await resend.emails.send({
        from: 'LynkTown Support <support@lynktown.com>',
        to: req.body.email,
        subject: 'Thank you contacting LynkTown',
        react: <ThanksForContacting username={req.body.name} />,
      });

      await resend.emails.send({
        from: 'LynkTown Support <support@lynktown.com>',
        to: 'support@lynktown.com',
        subject: 'New Form Submission',
        react: (
          <FromSubmit
            submitFrom='Contact Us'
            formInfo={[
              {
                title: 'name',
                value: req.body.name,
              },
              {
                title: 'email',
                value: req.body.email,
              },
              {
                title: 'phone',
                value: req.body.phone,
              },
              {
                title: 'message',
                value: req.body.message,
              },
            ]}
          />
        ),
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
