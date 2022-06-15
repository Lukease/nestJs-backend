import { Module } from '@nestjs/common'
import { FourthModuleController } from './fourth-module.controller'
import { FourthModuleService} from './fourth-module.service'
import { FifthModuleModule } from '../fifth-module'

@Module({
  controllers: [FourthModuleController],
  providers: [FourthModuleService],
  imports: [FifthModuleModule],
})
export class FourthModuleModule {}