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
import { QueryParams } from 'src/coordinates/types/QueryParams';
import { CoordinatesService } from './coordinates.service';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { UpdateCoordinatesDto } from './dto/update-coordinates';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordinatesService: CoordinatesService) {}

  @Post()
  create(@Body() createCoordinatesDto: CreateCoordinatesDto) {
    return this.coordinatesService.create(createCoordinatesDto);
  }

  @Get()
  async findAll(@Res() res: Response, @Query() params: QueryParams) {
    const { coordinates, totalCount } =
      await this.coordinatesService.findAll(params);

    res.setHeader('x-total-count', totalCount).send(coordinates);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coordinatesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCoordinatesDto: UpdateCoordinatesDto,
  ) {
    return this.coordinatesService.update(id, updateCoordinatesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coordinatesService.remove(id);
  }
}
