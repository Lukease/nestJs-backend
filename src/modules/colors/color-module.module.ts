import { Module } from '@nestjs/common'
import { ColorModuleController } from './color-module.controller'
import { ColorModuleService} from './color-module.service'

@Module({
  controllers: [ColorModuleController],
  providers: [ColorModuleService],
  exports: [ColorModuleService],
})
export class ColorModuleModule {}