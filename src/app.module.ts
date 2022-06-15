import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SecondModuleModule } from './modules/second-module'
import { ThirdModuleModule } from './modules/third-module'
import { PersonsModuleModule } from './modules/persons'
import { ColorModuleModule } from './modules/colors'

@Module({
  imports: [SecondModuleModule, ThirdModuleModule, PersonsModuleModule, ColorModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
