import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards()
  @Post('login')
  
  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
}
