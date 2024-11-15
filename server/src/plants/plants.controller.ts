import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { PlantsService } from './plants.service';

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
}
