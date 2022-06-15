import { Body, Controller, Delete, Get, Patch } from '@nestjs/common'
import { RemoveColorDto, GetColorDto, UpdateColorDto } from './dto'
import { ColorModuleService } from './color-module.service'

@Controller('fifth')
export class ColorModuleController {
  constructor(
    private readonly ColorModuleService: ColorModuleService
  ) {
  }

  @Get()
  getName(@Body() dto: GetColorDto) {
    return this.ColorModuleService.findByName(dto.favouriteColor)
  }

  @Delete()
  delete(@Body() dto: RemoveColorDto) {
    return this.ColorModuleService.removeColor(dto.favouriteColor)
  }

  @Patch()
  patch(@Body() dto: UpdateColorDto) {
    return this.ColorModuleService.updateName(dto.removeColor, dto.addColor)
  }
}