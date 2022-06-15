import { Controller, Patch, Post, Get, Delete, Query, Body } from '@nestjs/common'
import {SecondModuleService} from './second-module.service'

@Controller('second')
export class SecondModuleController {
    constructor(
        private readonly secondModuleService: SecondModuleService
    ) {
    }

    @Get()
    get(@Query() dto) {
        return this.secondModuleService.getNames()
    }

    @Post()
    post(@Body() dto) {
        console.log(dto)
        return this.secondModuleService.addNames()
    }

    @Delete()
    delete() {
        return this.secondModuleService.deleteName()
    }

    @Patch()
    patch() {
        return this.secondModuleService.patchName()
    }
}