// api-gateway/src/chatbot/chatbot.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { ClientProxyApp } from '../common/proxy/client-proxy';
import { ChatbotDto } from './dto/chatbot.dto';
import { ChatbotMSG } from '../common/constants';
import { firstValueFrom } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('chatbot')
@Controller('chatbot')
export class ChatbotController {
    constructor(private readonly clientProxy: ClientProxyApp) {}
    private _clientProxyChatbot = this.clientProxy.clientProxyChatbot();

    @Post('message')
    async sendMessage(@Body() chatbotDto: ChatbotDto) {
        try {
            const response = await firstValueFrom(
                this._clientProxyChatbot.send(ChatbotMSG.MESSAGE, chatbotDto.prompt)
            );
            return {
                statusCode: 200,
                message: 'Message processed successfully',
                data: response
            };
        } catch (error) {
            return {
                statusCode: 500,
                message: 'Error processing message',
                error: error.message
            };
        }
    }
}