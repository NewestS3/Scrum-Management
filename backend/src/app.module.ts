import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './modules/register/register.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRegister } from './modules/register/model/user-register';


@Module({
  imports: [RegisterModule,TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"s3",
    password:"testpassword",
    database:"scrum_management",
    entities:[UserRegister],
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
