import { IsNumber, IsString } from 'class-validator'

export class CreatePersonDto {
  @IsString()
  readonly name: string

  @IsNumber()
  readonly age: number
}