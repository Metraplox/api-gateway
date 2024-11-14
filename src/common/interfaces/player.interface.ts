export interface IPlayer {
  readonly id: string;
  readonly name: string;
  readonly age: number;
  readonly position: string;
  readonly team: string;
  readonly goals: number;
  readonly assists: number;
  readonly redCards: number;
  readonly yellowCards: number;
  readonly matches: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
