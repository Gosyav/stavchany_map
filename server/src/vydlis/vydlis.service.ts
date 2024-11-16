import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { QueryParams } from 'src/vydlis/types/QueryParams';

@Injectable()
export class VydlisService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(params: QueryParams) {
    const {
      sort = 'ogc_fid',
      order = 'ASC',
      page = '1',
      perPage = '10',
      q = '',
    } = params;

    const filterCondition: Prisma.VydlisWhereInput = {
      id: { contains: q, mode: 'insensitive' },
      ogc_fid: { lt: 259 },
    };

    const totalCount = await this.prisma.vydlis.count({
      where: filterCondition,
    });

    const coordinates = await this.prisma.vydlis.findMany({
      where: filterCondition,
      orderBy: { [sort]: order.toLowerCase() },
      skip: (+page - 1) * +perPage,
      take: +perPage,
    });

    return { coordinates, totalCount };
  }
}
