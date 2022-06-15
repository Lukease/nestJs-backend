import { IsAlphanumeric, IsString, MinLength } from 'class-validator'

export class GetColorDto {
  @IsString()
  @MinLength(2)
  @IsAlphanumeric()
  readonly favouriteColor: string
}