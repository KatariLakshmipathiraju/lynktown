import { Resend } from 'resend';
import CustomerSubscription from '../../../components/emails/CustomerSubscription';
import SellerSubscription from '../../../components/emails/SellerSubscription';

const resend = new Resend('re_NesBsUUz_EQmrSYWn1WoCL5h279X1Z6na');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const emailRes = await resend.emails.send({
        from: 'support@lynktown.com',
        to: req.body.email,
        subject: 'Hello World',
        react:
          req.body.users === 'customer' ? (
            <CustomerSubscription username={req.body.email.split('@')[0]} />
          ) : (
            <SellerSubscription username={req.body.email.split('@')[0]} />
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
