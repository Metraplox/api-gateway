import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthModule } from './auth/auth.module';
import config from './config';
import { UserModule } from './user/user.module';
import { PlayerModule } from './player/player.module';
import { TeamModule } from './team/team.module';
import { MatchModule } from './match/match.module';

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
    PlayerModule,
    TeamModule,
    MatchModule,
  ],
})
export class AppModule {}
