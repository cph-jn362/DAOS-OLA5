import { Controller, Get, Post, Delete, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { ItemDocument } from 'src/schema/item.schema';
import { ItemService } from './item.service';


@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService){}

    @Post()
    createItem(  
    @Body('name') name: string,
    @Body('description') description: string,
    ): Promise<ItemDocument>{
        return this.itemService.create(name, description);
    }

    @Get()
    findAllItems(): Promise<ItemDocument[]>{
        return this.itemService.findAll();
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    findItem(@Param('id') id: string): Promise<ItemDocument>{
        return this.itemService.find(id);
    }

    @Patch(':id')
    updateItem(
        @Param('id') id: string, 
        @Body('name') name: string,
        @Body('description') description: string,
          ): Promise<ItemDocument>{
        return this.itemService.update(id, name, description);
    }
    
    @Delete(':id')
    deleteItem(@Param('id') id: string){
        return this.itemService.delete(id);
    }

}
