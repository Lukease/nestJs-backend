import { Module } from '@nestjs/common'
import { PersonsModuleController } from './persons-module.controller'
import { PersonsModuleService} from './persons-module.service'
import { ColorModuleModule } from '../colors'

@Module({
  controllers: [PersonsModuleController],
  providers: [PersonsModuleService],
  imports: [ColorModuleModule],
})
export class PersonsModuleModule {}