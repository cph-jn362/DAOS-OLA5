import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { NewUserDTO } from 'src/dto/new-user.dto';
import { UserAttributes } from 'src/interface/user-attributes.interface';
import { ExistingUserDTO } from 'src/dto/existing-user.dto';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService){}

    async hashPassword(password: string): Promise<string>{
        return bcrypt.hash(password, 12);
    } 
    
    async register(user: Readonly<NewUserDTO>): Promise<UserAttributes | any>{
        const { name, email, password } = user;

        const existingUser = await this.userService.findByEmail(email);

        if(existingUser) return 'Email taken!';

        const hashedPassword = await this.hashPassword(password);

        const newUser = await this.userService.create(name, email, hashedPassword);

        return this.userService._getUserAttributes(newUser);
    }

    async passwordMatch(password: string, hashedPassword: string): Promise<boolean>{
        return bcrypt.compare(password, hashedPassword);
    }

    async validateUser(email: string, password: string): Promise<UserAttributes | null>{
        const user = await this.userService.findByEmail(email);
        const userMatch = !!user;

        if (!userMatch) return null;

        const passwordMatch = await this.passwordMatch(password, user.password);

        if (!passwordMatch) return null;

        return this.userService._getUserAttributes(user);
    }

    async login(existingUser: ExistingUserDTO): Promise<{token: string} | null>{
        const {email,password} = existingUser;
        const user = await this.validateUser(email, password);

        if(!user) return null;

        const jwt = await this.jwtService.signAsync({ user });
        return { token: jwt };
    }
    
}
