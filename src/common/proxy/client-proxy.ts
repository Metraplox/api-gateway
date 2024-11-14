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
export class ClientProxyAhora {
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

  clientProxyPlayers(): ClientProxy {
    const amqpUrl = this.configService.rabbitMQ.amqpUrl;

    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [amqpUrl],
        queue: RabbitMQ.PlayerQueue,
      },
    });
  }

  clientProxyTeams(): ClientProxy {
    const amqpUrl = this.configService.rabbitMQ.amqpUrl;

    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [amqpUrl],
        queue: RabbitMQ.TeamQueue,
      },
    });
  }

  clientProxyMatches(): ClientProxy {
    const amqpUrl = this.configService.rabbitMQ.amqpUrl;

    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [amqpUrl],
        queue: RabbitMQ.MatchQueue,
      },
    });
  }
}
