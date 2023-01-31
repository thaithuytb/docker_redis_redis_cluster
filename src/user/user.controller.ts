import {
  Body,
  CACHE_MANAGER,
  Controller,
  Inject,
  Post,
  Get,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { token } = createUserDto;
    const tokens =
      ((await this.cacheManager.get('token')) as Array<string>) ?? [];
    tokens.push(token);
    return await this.cacheManager.set('token', tokens, 6);
  }

  @Get()
  async getAllToken() {
    return (await this.cacheManager.get('token')) ?? [];
  }

  @Get('/del')
  async deleteTokenRedis() {
    return await this.cacheManager.del('token');
  }
}
