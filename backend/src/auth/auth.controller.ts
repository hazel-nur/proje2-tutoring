import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Yeni kullanıcı kaydı oluşturur' })
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Giriş yapar ve JWT token döndürür' })
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('admin-test')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Sadece Admin rolünün erişebildiği deneme endpoint\'i' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Admin')
  async adminTest(@Req() req: any) {
    return {
      message: 'Tebrikler, Admin olarak bu korumalı endpoint\'e erişebildin!',
      kullanici: req.user,
    };
  }
}