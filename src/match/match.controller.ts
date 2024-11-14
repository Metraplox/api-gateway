import { Body, Controller, Get, Post } from '@nestjs/common';
import { MatchMSG } from 'src/common/constants';
import { ClientProxyAhora } from 'src/common/proxy/client-proxy';
import { CreateMatchDto } from './dto/match.dto';

@Controller('match')
export class MatchController {
  constructor(private readonly clientProxyMatch: ClientProxyAhora) {}
  private _clientProxyMatch = this.clientProxyMatch.clientProxyMatches();

  @Post('create')
  create(@Body() createMatchDTO: CreateMatchDto) {
    return this._clientProxyMatch.send(MatchMSG.CREATE, createMatchDTO);
  }

  @Get('matches')
  findAll() {
    return this._clientProxyMatch.send(MatchMSG.FIND_ALL, '');
  }
}
