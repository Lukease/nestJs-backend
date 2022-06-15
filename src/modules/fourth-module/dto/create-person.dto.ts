import { IsNumber, IsString } from 'class-validator'

export class CreatePersonDto {
  @IsString()
  readonly firstName: string

  @IsString()
  readonly lastName: string

  @IsNumber()
  readonly yearOfBirth: number

  @IsString({ each: true })
  readonly favouriteColors: Array<string>
}