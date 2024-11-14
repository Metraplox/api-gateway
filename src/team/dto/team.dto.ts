import { PartialType } from '@nestjs/swagger';

export class CreateTeamDto {
  capitanId: string;
  name: string;
}

export class UpdateTeamDto extends PartialType(CreateTeamDto) {}
