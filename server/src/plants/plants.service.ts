import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreatePlantDto } from 'src/plants/dto/create-plant.dto';
import { UpdatePlantDto } from 'src/plants/dto/update-plant.dto';
import { QueryParams } from 'src/plants/types/QueryParams';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlantsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllForAdmin(params: QueryParams) {
    const {
      sort = 'ogc_fid',
      order = 'ASC',
      page = '1',
      perPage = '10',
      q = '',
    } = params;

    const filterCondition: Prisma.PlantWhereInput = {
      forestry_name: 'Ставчанське',
      forest_elem: { contains: q, mode: 'insensitive' },
    };

    const totalCount = await this.prisma.plant.count({
      where: filterCondition,
    });

    const plants = await this.prisma.plant.findMany({
      where: filterCondition,
      orderBy: { [sort]: order.toLowerCase() },
      skip: (+page - 1) * +perPage,
      take: +perPage,
    });

    return { plants, totalCount };
  }

  async findAll() {
    return await this.prisma.plant.findMany({
      where: { forestry_name: 'Ставчанське' },
    });
  }

  async getAllWithCoordinates() {
    return await this.prisma.plant.findMany({
      where: { forestry_name: 'Ставчанське' },
      include: {
        vydlis: {
          include: { coordinates: true },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.plant.findUnique({ where: { ogc_fid: id } });
  }

  create(createPlantDto: CreatePlantDto) {
    return this.prisma.plant.create({ data: createPlantDto });
  }

  update(id: number, updatePlantDto: UpdatePlantDto) {
    return this.prisma.plant.update({
      where: { ogc_fid: id },
      data: updatePlantDto,
    });
  }

  deleteById(id: number) {
    return this.prisma.plant.delete({ where: { ogc_fid: id } });
  }
}
