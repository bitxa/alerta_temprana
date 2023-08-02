// src/messages/messages.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { TwilioService } from '../twilio/twilio.service';

@Controller('messages')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post()
  async sendWhatsAppMessage(
    @Body('phoneNumber') phoneNumber: string,
    @Body('message') message: string,
  ): Promise<string> {
    try {
      const twilioPhoneNumber = '+14155238886';
      await this.twilioService.sendWhatsAppMessage(
        twilioPhoneNumber,
        phoneNumber,
        message,
      );
      return 'WhatsApp message sent successfully.';
    } catch (error) {
      return 'Error sending WhatsApp message: ' + error.message;
    }
  }
}
