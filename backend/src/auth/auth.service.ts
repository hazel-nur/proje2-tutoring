import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../shared/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async hashPassword(plainPassword: string): Promise<string> {
    return bcrypt.hash(plainPassword, 10);
  }

  async comparePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('Bu email adresi zaten kayıtlı.');
    }

    const sifreHash = await this.hashPassword(dto.sifre);

    const user = await this.prisma.user.create({
      data: {
        ad: dto.ad,
        email: dto.email,
        sifreHash: sifreHash,
        role: dto.role,
      },
    });

    const { sifreHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Email veya şifre hatalı.');
    }

    const sifreDogruMu = await this.comparePassword(
      dto.sifre,
      user.sifreHash,
    );

    if (!sifreDogruMu) {
      throw new UnauthorizedException('Email veya şifre hatalı.');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    const token = await this.jwtService.signAsync(payload);

    const { sifreHash: _, ...userWithoutPassword } = user;
    return {
      access_token: token,
      user: userWithoutPassword,
    };
  }
}