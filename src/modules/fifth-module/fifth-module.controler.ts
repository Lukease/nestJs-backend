import { Body, Controller, Delete, Get, Patch } from '@nestjs/common'
import { RemoveColorDto, GetColorDto, UpdateColorDto } from './dto'
import { FifthModuleService } from './fifth-module.service'

@Controller('fifth')
export class FifthModuleController {
  constructor(
    private readonly FifthModuleService: FifthModuleService
  ) {
  }

  @Get()
  getName(@Body() dto: GetColorDto) {
    return this.FifthModuleService.findByName(dto.favouriteColor);
  }

  @Delete()
  delete(@Body() dto: RemoveColorDto) {
    return this.FifthModuleService.removeColor(dto.favouriteColor)
  }

  @Patch()
  patch(@Body() dto: UpdateColorDto) {
    return this.FifthModuleService.updateName(dto.removeColor, dto.addColor);
  }
}