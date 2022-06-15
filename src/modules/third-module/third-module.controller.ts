import { Controller, Patch, Post, Get, Delete, Body, Query } from '@nestjs/common'
import { ThirdModuleService } from './third-module.service'
import { CreatePersonDto, ChangePersonalityDto } from "./dto"

@Controller('third')
export class ThirdModuleController {
  constructor(
    private readonly thirdModuleService: ThirdModuleService
  ) {
  }

  @Get()
  get(@Query('name') name: string) {
    return this.thirdModuleService.findByName(name)
  }

  @Post()
  post(@Body() body: CreatePersonDto) {
    return this.thirdModuleService.addPerson(body.name, body.age)
  }

  @Delete()
  delete(@Body() dto) {
    const { name } = dto

    return this.thirdModuleService.deletePerson(name)
  }

  @Patch()
  patch(@Body() body: ChangePersonalityDto) {
    return this.thirdModuleService.patchName(body.changeName, body.name, body.age)
  }
}
