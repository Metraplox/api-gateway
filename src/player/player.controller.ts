import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientProxyAhora } from 'src/common/proxy/client-proxy';
import { CreatePlayerDto, PlayerDto } from './dto/player.dto';
import { PlayerMSG } from 'src/common/constants';
import { IPlayer } from 'src/common/interfaces/player.interface';

@Controller('player')
export class PlayerController {
  constructor(private readonly clientProxy: ClientProxyAhora) {}
  private _clientProxyPlayer = this.clientProxy.clientProxyPlayers();

  @Post('create')
  create(@Body() createPlayerDTO: CreatePlayerDto): Observable<IPlayer> {
    return this._clientProxyPlayer.send(PlayerMSG.CREATE, createPlayerDTO);
  }

  @Get('players')
  findAll(): Observable<IPlayer[]> {
    return this._clientProxyPlayer.send(PlayerMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IPlayer> {
    return this._clientProxyPlayer.send(PlayerMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() playerDTO: PlayerDto,
  ): Observable<IPlayer> {
    return this._clientProxyPlayer.send(PlayerMSG.UPDATE, { id, playerDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyPlayer.send(PlayerMSG.DELETE, id);
  }
}
