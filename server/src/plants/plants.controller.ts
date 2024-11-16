import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { PlantsService } from './plants.service';

import { CreatePlantDto } from 'src/plants/dto/create-plant.dto';
import { UpdatePlantDto } from 'src/plants/dto/update-plant.dto';
import { QueryParams } from 'src/plants/types/QueryParams';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get('/')
  async findAllForAdmin(@Res() res: Response, @Query() params: QueryParams) {
    const { plants, totalCount } =
      await this.plantsService.findAllForAdmin(params);

    res.setHeader('x-total-count', totalCount).send(plants);
  }

  @Get('/all')
  async findAll() {
    return await this.plantsService.findAll();
  }

  @Get('/coordinates')
  getAllWithCoordinates() {
    return this.plantsService.getAllWithCoordinates();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plantsService.findOne(+id);
  }

  @Post()
  create(@Body() createPlantDto: CreatePlantDto) {
    return this.plantsService.create(createPlantDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlantDto: UpdatePlantDto) {
    return this.plantsService.update(+id, updatePlantDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.plantsService.deleteById(+id);
  }
}
