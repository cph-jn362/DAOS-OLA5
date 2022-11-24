import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserAttributes } from 'src/interface/user-attributes.interface';
import { UserDocument } from 'src/schema/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>){}
    _getUserAttributes(user: UserDocument): UserAttributes {
        return {
            id: user._id,
            name: user.name,
            email: user.email,
        };
    }

    async findByEmail(email: string): Promise<UserDocument | null>{
        return this.userModel.findOne({email}).exec();
    }

    async findById(id: string): Promise<UserAttributes | null>{
        const user = await this.userModel.findById(id).exec();
        if(!user) return null;
        return this._getUserAttributes(user);
    }

    async create(name: string, email: string, hashedPassword: string): Promise<UserDocument>{
        const newUser = new this.userModel({name, email, password:hashedPassword});
        return newUser.save()
    }
}
