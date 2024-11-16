import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { QueryParams } from 'src/coordinates/types/QueryParams';
import { PrismaService } from 'src/prisma.service';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { UpdateCoordinatesDto } from './dto/update-coordinates';

@Injectable()
export class CoordinatesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCoordinatesDto: CreateCoordinatesDto) {
    return this.prisma.coordinates.create({
      data: {
        ...createCoordinatesDto,
        longitude: +createCoordinatesDto.longitude,
        latitude: +createCoordinatesDto.latitude,
      },
    });
  }

  async findAll(params: QueryParams) {
    const {
      sort = 'ogc_fid',
      order = 'ASC',
      page = '1',
      perPage = '10',
      q = '',
    } = params;

    const filterCondition: Prisma.CoordinatesWhereInput = {
      vydlisId: { contains: q, mode: 'insensitive' },
    };

    const totalCount = await this.prisma.coordinates.count({
      where: filterCondition,
    });

    const coordinates = await this.prisma.coordinates.findMany({
      where: filterCondition,
      orderBy: { [sort]: order.toLowerCase() },
      skip: (+page - 1) * +perPage,
      take: +perPage,
    });

    return { coordinates, totalCount };
  }

  findOne(id: string) {
    return this.prisma.coordinates.findUnique({ where: { id } });
  }

  update(id: string, updateCoordinatesDto: UpdateCoordinatesDto) {
    return this.prisma.coordinates.update({
      where: { id },
      data: updateCoordinatesDto,
    });
  }

  remove(id: string) {
    return this.prisma.vydlis.delete({ where: { id } });
  }
}
