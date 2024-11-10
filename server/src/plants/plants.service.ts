import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlantsService {
  constructor(private readonly prisma: PrismaService) {}

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
}
