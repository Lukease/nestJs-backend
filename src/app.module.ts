import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SecondModuleModule } from './modules/second-module'
import { ThirdModuleModule } from './modules/third-module'
import { FourthModuleModule } from './modules/fourth-module'
import { FifthModuleModule } from './modules/fifth-module'

@Module({
  imports: [SecondModuleModule, ThirdModuleModule, FourthModuleModule, FifthModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
