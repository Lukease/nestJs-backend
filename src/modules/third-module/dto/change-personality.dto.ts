import { IsInt, IsString } from 'class-validator'

export class ChangePersonalityDto {
  @IsString()
  readonly changeName: string

  @IsString()
  readonly name: string

  @IsInt()
  readonly age: number
}