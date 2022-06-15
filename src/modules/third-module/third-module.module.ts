import { Module } from '@nestjs/common'
import { ThirdModuleController } from './third-module.controller'
import { ThirdModuleService} from './third-module.service'

@Module({
  controllers: [ThirdModuleController],
  providers: [ThirdModuleService]
})
export class ThirdModuleModule {}