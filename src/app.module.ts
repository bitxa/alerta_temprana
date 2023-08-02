import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TwilioModule } from './twilio/twilio.module';
import { AppService } from './app.service';
import { TwilioController } from './twilio/twilio.controller';

@Module({
  imports: [TwilioModule],
  controllers: [AppController, TwilioController],
  providers: [AppService],
})
export class AppModule {}
