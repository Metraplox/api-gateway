import { Module } from '@nestjs/common';
import { MatchController } from './match.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [MatchController],
})
export class MatchModule {}
