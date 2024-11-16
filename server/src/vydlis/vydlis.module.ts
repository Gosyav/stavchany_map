import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { VydlisController } from './vydlis.controller';
import { VydlisService } from './vydlis.service';

@Module({
  controllers: [VydlisController],
  providers: [PrismaService, VydlisService],
})
export class VydlisModule {}
