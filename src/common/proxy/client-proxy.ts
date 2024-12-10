import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import config from 'src/config';
import { RabbitMQ } from '../constants';

@Injectable()
export class ClientProxyApp {
  constructor(
    @Inject(config.KEY)
    private readonly configService: ConfigType<typeof config>,
  ) {}

  clientProxyUsers(): ClientProxy {
    const amqpUrl = this.configService.rabbitMQ.amqpUrl;
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [amqpUrl],
        queue: RabbitMQ.UserQueue,
      },
    });
  }

  clientProxyCourses(): ClientProxy {
    const amqpUrl = this.configService.rabbitMQ.amqpUrl;
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [amqpUrl],
        queue: RabbitMQ.CoursesQueue,
      },
    });
  }

  clientProxyPayment(): ClientProxy {
    const amqpUrl = this.configService.rabbitMQ.amqpUrl;
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [amqpUrl],
        queue: RabbitMQ.PaymentQueue,
      },
    });
  }

  clientProxyChatbot(): ClientProxy {
    const amqpUrl = this.configService.rabbitMQ.amqpUrl;
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [amqpUrl],
        queue: RabbitMQ.ChatbotQueue,
      },
    });
  }
}
