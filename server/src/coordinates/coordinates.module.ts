import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CoordinatesController } from './coordinates.controller';
import { CoordinatesService } from './coordinates.service';

@Module({
  controllers: [CoordinatesController],
  providers: [PrismaService, CoordinatesService],
})
export class CoordinatesModule {}
