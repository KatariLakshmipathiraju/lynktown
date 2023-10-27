import { Resend } from 'resend';
import CustomerSubscription from '../../../components/emails/CustomerSubscription';
import SellerSubscription from '../../../components/emails/SellerSubscription';
import FromSubmit from '../../../components/emails/FormSubmit';

const resend = new Resend('re_NesBsUUz_EQmrSYWn1WoCL5h279X1Z6na');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await resend.emails.send({
        from: 'LynkTown Support <support@lynktown.com>',
        to: req.body.email,
        subject: 'Confirmation - LynkTown Newsletter Subscription',
        react:
          req.body.users === 'customer' ? (
            <CustomerSubscription username={req.body.email.split('@')[0]} />
          ) : (
            <SellerSubscription username={req.body.email.split('@')[0]} />
          ),
      });

      const email = await resend.emails.send({
        from: 'LynkTown Support <support@lynktown.com>',
        to: 'support@lynktown.com',
        subject: 'New LynkTown Newsletter Subscription',
        react: (
          <FromSubmit
            submitFrom='LynkTown Newsletter Subscription'
            formInfo={[
              {
                title: 'role',
                value: req.body.users,
              },
              {
                title: 'email',
                value: req.body.email,
              },
            ]}
          />
        ),
      });
      console.log('🚀 ~ file: join-now.js:45 ~ handler ~ email:', email);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.log('🚀 ~ file: join-now.js:45 ~ handler ~ error:', error);
      res
        .status(500)
        .json({ error: 'failed to sent the email try after some time' });
    }
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
