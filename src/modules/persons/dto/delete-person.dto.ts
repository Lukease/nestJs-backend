import { IsString } from 'class-validator'

export class DeletePersonDto {
  @IsString()
  readonly uuid: string
}