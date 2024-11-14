import { Module } from '@nestjs/common';
import { ClientProxyAhora } from './client-proxy';

@Module({
  providers: [ClientProxyAhora],
  exports: [ClientProxyAhora],
})
export class ProxyModule {}
