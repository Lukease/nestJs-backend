import { IsString } from 'class-validator'

export class CreateFavouriteColorsDto {
  @IsString()
  readonly color: string
}