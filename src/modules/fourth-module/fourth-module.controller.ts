import { Controller, Patch, Post, Get, Delete, Body } from '@nestjs/common'
import { FourthModuleService } from './fourth-module.service'
import { GetPersonByYearDto, DeletePersonDto, GetPersonDto, ChangePersonalityDto, CreatePersonDto } from './dto'
import { FifthModuleService } from '../fifth-module/fifth-module.service'

@Controller('fourth')
export class FourthModuleController {
  constructor(
    private readonly fourthModuleService: FourthModuleService,
    private readonly fifthModuleService: FifthModuleService
  ) {
  }

  @Get()
  getName(@Body() dto: GetPersonDto) {
    return this.fourthModuleService.findByName(dto.firstName, dto.lastName);
  }

  @Get('by-year')
  getYear(@Body() dto: GetPersonByYearDto) {
    return this.fourthModuleService.findByYear(dto.yearOfBirth);
  }

  @Post()
  post(@Body() dto: CreatePersonDto) {
    const newPerson = this.fourthModuleService.addPerson(dto.firstName, dto.lastName, dto.yearOfBirth, dto.favouriteColors)
    this.fifthModuleService.addColor(dto.favouriteColors)

    return newPerson
  }

  @Delete()
  delete(@Body() dto: DeletePersonDto) {
    return this.fourthModuleService.deletePerson(dto.uuid)
  }

  @Patch()
  patch(@Body() dto: ChangePersonalityDto) {
    return this.fourthModuleService.updateName(dto.uuid, dto.firstName, dto.lastName, dto.yearOfBirth);
  }
}
