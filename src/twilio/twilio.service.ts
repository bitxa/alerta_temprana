// src/twilio/twilio.service.ts
import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';

@Injectable()
export class TwilioService {
  private readonly accountSid = 'AC483ed27c63df30a1b60f92adfd1358ea';
  private readonly authToken = '16fee28d7090aad6b05221d21467d8c0';
  private readonly client: Twilio;

  constructor() {
    this.client = new Twilio(this.accountSid, this.authToken);
  }

  async sendWhatsAppMessage(
    twilioPhoneNumber: string,
    phoneNumber: string,
    message: string,
  ): Promise<void> {
    try {
      await this.client.messages.create({
        from: `whatsapp:${twilioPhoneNumber}`,
        to: `whatsapp:${phoneNumber}`,
        body: message,
      });
      console.log('WhatsApp message sent successfully.');
    } catch (error) {
      console.error('Error sending WhatsApp message: ', error);
      throw error;
    }
  }
}
