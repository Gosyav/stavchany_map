import { Controller, Get, Param } from '@nestjs/common';
import { PlantsService } from './plants.service';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get()
  findAll() {
    return this.plantsService.findAll();
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
