import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [TeamController],
})
export class TeamModule {}
