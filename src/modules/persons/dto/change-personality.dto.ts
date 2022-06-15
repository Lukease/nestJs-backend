import { IsNumber, IsString } from 'class-validator'

export class ChangePersonalityDto {
  @IsString()
  readonly uuid: string

  @IsString()
  readonly firstName: string

  @IsString()
  readonly lastName: string

  @IsNumber()
  readonly yearOfBirth: number
}