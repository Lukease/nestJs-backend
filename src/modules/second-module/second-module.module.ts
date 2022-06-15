import { Module } from '@nestjs/common'
import { SecondModuleController } from './second-module.controller'
import { SecondModuleService} from './second-module.service'

@Module({
    controllers: [SecondModuleController],
    providers: [SecondModuleService]
})
export class SecondModuleModule {}