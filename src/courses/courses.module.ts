import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { CoursesController } from './courses.controller';

@Module({
  imports: [ProxyModule],
  controllers: [CoursesController],
})
export class CoursesModule {}
