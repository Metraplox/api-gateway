import { IPlayer } from './player.interface';

export interface ITeam {
  readonly id: string;
  readonly name: string;
  readonly players: IPlayer[];
}
