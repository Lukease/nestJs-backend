import { Controller, Patch, Post, Get, Delete, Body } from '@nestjs/common'
import { PersonsModuleService } from './persons-module.service'
import { GetPersonByYearDto, DeletePersonDto, GetPersonDto, ChangePersonalityDto, CreatePersonDto } from './dto'
import { ColorModuleService } from '../colors/color-module.service'

@Controller('fourth')
export class PersonsModuleController {
  constructor(
    private readonly personsModuleService: PersonsModuleService,
    private readonly colorModuleService: ColorModuleService
  ) {
  }

  @Get()
  getName(@Body() dto: GetPersonDto) {
    return this.personsModuleService.findByName(dto.firstName, dto.lastName);
  }

  @Get('by-year')
  getYear(@Body() dto: GetPersonByYearDto) {
    return this.personsModuleService.findByYear(dto.yearOfBirth);
  }

  @Post()
  post(@Body() dto: CreatePersonDto) {
    const newPerson = this.personsModuleService.addPerson(dto.firstName, dto.lastName, dto.yearOfBirth, dto.favouriteColors)
    this.colorModuleService.addColor(dto.favouriteColors)

    return newPerson
  }

  @Delete()
  delete(@Body() dto: DeletePersonDto) {
    return this.personsModuleService.deletePerson(dto.uuid)
  }

  @Patch()
  patch(@Body() dto: ChangePersonalityDto) {
    return this.personsModuleService.updateName(dto.uuid, dto.firstName, dto.lastName, dto.yearOfBirth);
  }
}
