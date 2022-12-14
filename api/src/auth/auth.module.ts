import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './guard/jwt.strategy';

@Module({
  imports: [UserModule, JwtModule.registerAsync({useFactory: () => ({
    secret: 'secret',
    signOptions: {expiresIn:'1800s'},
  })})],
  controllers: [AuthController],
  providers: [AuthService, JwtModule, JwtStrategy],
})
export class AuthModule {}
