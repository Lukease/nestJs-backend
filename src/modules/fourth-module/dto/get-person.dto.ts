import { IsString } from 'class-validator'

export class GetPersonDto {
  @IsString()
  readonly firstName: string

  @IsString()
  readonly lastName: string
}