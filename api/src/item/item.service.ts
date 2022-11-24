import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { ItemDocument } from 'src/schema/item.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<ItemDocument>) {}
    
    async create(name: string, description: string): Promise<ItemDocument>{
        const newItem = new this.itemModel({ name, description});
        return newItem.save();
    }

    async findAll(): Promise<ItemDocument[]>{
        return this.itemModel.find().exec();
    }

    async find(id: string): Promise<ItemDocument>{
        return this.itemModel.findById(id).exec();
    }

    async update(id: string, newName: string, newDescription: string): Promise<ItemDocument>{
        let existingItem = await this.find(id);
        existingItem.name = newName ?? existingItem.name;
        existingItem.description = newDescription ?? existingItem.description;
        return existingItem.save();
    }

    async delete(id: string){
        return this.itemModel.deleteOne({_id: id}).exec();
    }
}
