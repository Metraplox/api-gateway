import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PaymentModule } from './payment/payment.module';
import { CoursesModule } from './courses/courses.module';
import { ChatbotController } from './chatbot/chatbot.controller';
import { ChatbotModule } from './chatbot/chatbot.module';

import * as Joi from 'joi';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        APP_PORT: Joi.number().default(3000),
        ACCESS_JWT_SECRET: Joi.string().required(),
        ACCESS_EXPIRES_IN: Joi.string().required(),
        REFRESH_JWT_SECRET: Joi.string().required(),
        REFRESH_EXPIRES_IN: Joi.string().required(),
        AMQP_URL: Joi.string().required(),
      }),
    }),
    UserModule,
    AuthModule,
    PaymentModule,
    CoursesModule,
    ChatbotModule,
  ],
})
export class AppModule {}
