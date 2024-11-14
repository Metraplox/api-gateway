import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientProxyAhora } from 'src/common/proxy/client-proxy';
import { CreateTeamDto, UpdateTeamDto } from './dto/team.dto';
import { ITeam } from 'src/common/interfaces/team.interface';
import { TeamMSG } from 'src/common/constants';

@Controller('team')
export class TeamController {
  constructor(private readonly clientProxy: ClientProxyAhora) {}
  private _clientProxyTeam = this.clientProxy.clientProxyTeams();

  @Post('create')
  create(@Body() createTeamDTO: CreateTeamDto): Observable<ITeam> {
    return this._clientProxyTeam.send(TeamMSG.CREATE, createTeamDTO);
  }

  @Get('teams')
  findAll(): Observable<ITeam[]> {
    return this._clientProxyTeam.send(TeamMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ITeam> {
    return this._clientProxyTeam.send(TeamMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() teamDTO: UpdateTeamDto,
  ): Observable<ITeam> {
    return this._clientProxyTeam.send(TeamMSG.UPDATE, { id, teamDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyTeam.send(TeamMSG.DELETE, id);
  }

  @Patch('add-player')
  addPlayerToTeam(@Body() data: { teamId: string; playerId: string }) {
    return this._clientProxyTeam.send(TeamMSG.ADD_PLAYER_TO_TEAM, data);
  }
}
