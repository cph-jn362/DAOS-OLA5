import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ExistingUserDTO } from 'src/dto/existing-user.dto';
import { NewUserDTO } from 'src/dto/new-user.dto';
import { UserAttributes } from 'src/interface/user-attributes.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

        @Post('register')
        register(@Body() user: NewUserDTO): Promise<UserAttributes | null> {
            return this.authService.register(user);
        }

        @Post('login')
        @HttpCode(HttpStatus.ACCEPTED)
        login(@Body() user: ExistingUserDTO): Promise<{token: string} | null> {
            return this.authService.login(user);
        } 
    
}
