import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { RSVPData } from '../consts/types';

// type emailResource = {
//     serviceId: string,
//     templateId: string,
//     userId: string,
//     rsvpData: RSVPData,
// }

export const handleRSVPFormSubmit = (rsvpData: RSVPData) => {
    emailjs
    .send(
      'service_lpwobfk', // Service ID
      'template_9k137tu', // Template ID
      {rsvpData},
      'd3v9fY3bp6fzGBRd-' // Public key
    )
    .then((response: EmailJSResponseStatus) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error: any) => {
      console.error('Email sending failed:', JSON.stringify(error));
    });
};
