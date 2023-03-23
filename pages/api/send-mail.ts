// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import Template from 'vs-email-template-typescript-package';
import { isEmpty } from 'lodash';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const body = req.body;

    const { name, email, message } = JSON.parse(body);
    if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
      return res.status(400).json({ success: false });
    }

    try {
      sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? '');
      const template = Template()
        .title('Kontaktinformationen', { 'margin-bottom': '20px' })
        .list({
          'Vorname Name': name,
          Email: email,
          Nachricht: message
        })
        .render();

      const payLoad: any = {
        from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
        to: process.env.NEXT_PUBLIC_EMAIL_RECEIVE,
        subject:
          'Kontakt Formular ' + `- ${new Date().toLocaleDateString('de-DE')}`,
        text: template || '',
        html: template || ''
      };

      sgMail
        .send(payLoad)
        .then(() => {
          return res.status(200).json({ success: true });
        })
        .catch(error => {
          return res.status(500).json({ success: false, response: error });
        });
    } catch (error) {
      return res.status(500).json({ success: false, response: error });
    }
  }
};

export default handler;
