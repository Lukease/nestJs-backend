import { IsAlpha, IsString, MaxLength, MinLength } from 'class-validator'

export class RemoveColorDto {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  @IsAlpha()
  readonly favouriteColor: string
}