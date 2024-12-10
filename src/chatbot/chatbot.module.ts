import { Module } from '@nestjs/common';
import { ChatbotController } from './chatbot.controller';
import {ProxyModule} from "../common/proxy/proxy.module";

@Module({
    imports: [ProxyModule],
    controllers: [ChatbotController],
})
export class ChatbotModule {}
