import { Module } from '@nestjs/common'
import { FifthModuleController } from './fifth-module.controler'
import { FifthModuleService} from './fifth-module.service'

@Module({
  controllers: [FifthModuleController],
  providers: [FifthModuleService],
  exports: [FifthModuleService],
})
export class FifthModuleModule {}