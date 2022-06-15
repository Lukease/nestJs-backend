import { IsAlpha, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class UpdateColorDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  @IsAlpha()
  readonly removeColor: string

  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  @IsAlpha()
  readonly addColor: string
}