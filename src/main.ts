import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigType } from '@nestjs/config';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigType<typeof config>>(config.KEY);

  app.useGlobalFilters(new AllExceptionFilter());
  // app.useGlobalInterceptors(new TimeOutInterceptor());
  app.setGlobalPrefix('api/v2');

  const options = new DocumentBuilder()
    .setTitle('WebMovil API 2024')
    .setDescription('App WebMovil')
    .setVersion('2.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(configService.app.port);

  console.log(`${process.env.NODE_ENV} enviroment`);
  if (configService.app.environment === 'development') {
    const { accessSecret, accessExpiresIn, refreshSecret, refreshExpiresIn } =
      configService.jwt;
    const { amqpUrl } = configService.rabbitMQ;

    console.log(`
      Access Token Secret: ${accessSecret}
      Acces Token Expiration: ${accessExpiresIn}
      Refresh Token Secret: ${refreshSecret}
      Refresh Token Expiration: ${refreshExpiresIn}
      AMQP Url: ${amqpUrl}
      `);
  }
}
bootstrap();
