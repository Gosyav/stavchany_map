import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { VydlisModule } from 'src/vydlis/vydlis.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoordinatesModule } from './coordinates/coordinates.module';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [PlantsModule, CoordinatesModule, VydlisModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
