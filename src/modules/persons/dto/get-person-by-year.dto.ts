import { IsNumber } from 'class-validator'

export class GetPersonByYearDto {
  @IsNumber()
  readonly yearOfBirth: number
}