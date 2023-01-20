import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { CurrentUser } from '../current-user.decorator';
import { UserDocument } from './models/user.schema';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: createUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/cookies')
  getCookies(@Req() req: Request, @Res() res: Response): any {
    const jwt = req.cookies['Authentication'];
    return res.send(jwt);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@CurrentUser() user: UserDocument) {
    return user;
  }
}
