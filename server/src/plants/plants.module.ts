import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';

@Module({
  controllers: [PlantsController],
  providers: [PrismaService, PlantsService],
})
export class PlantsModule {}
