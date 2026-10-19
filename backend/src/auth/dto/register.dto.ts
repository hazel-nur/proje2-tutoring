import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Ayşe Öğrenci' })
  @IsString()
  @IsNotEmpty()
  ad: string;

  @ApiProperty({ example: 'ayse@test.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  @MinLength(6)
  sifre: string;

  @ApiProperty({ example: 'Öğrenci' })
  @IsString()
  @IsNotEmpty()
  role: string;
}