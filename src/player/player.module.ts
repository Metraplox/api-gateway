import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [PlayerController],
})
export class PlayerModule {}
