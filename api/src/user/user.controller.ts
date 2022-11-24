import { Controller, Get, Param } from '@nestjs/common';
import { UserAttributes } from 'src/interface/user-attributes.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get(':id')
    getUser(@Param('id') id: string): Promise<UserAttributes | null>{
        return this.userService.findById(id);
    }
}
