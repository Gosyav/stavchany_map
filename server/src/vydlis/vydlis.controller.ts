import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { QueryParams } from 'src/vydlis/types/QueryParams';
import { VydlisService } from './vydlis.service';

@Controller('vydlis')
export class VydlisController {
  constructor(private readonly vydlisService: VydlisService) {}

  @Get()
  async findAll(@Res() res: Response, @Query() params: QueryParams) {
    const { coordinates, totalCount } =
      await this.vydlisService.findAll(params);

    res.setHeader('x-total-count', totalCount).send(coordinates);
  }
}
