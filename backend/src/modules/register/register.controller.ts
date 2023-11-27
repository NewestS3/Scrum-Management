import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { UserRegister } from './model/user-register';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  register(@Body() userRegister:UserRegister){
    return userRegister
  }
}
