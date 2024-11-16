import { PartialType } from '@nestjs/mapped-types';
import { CreatePlantDto } from 'src/plants/dto/create-plant.dto';

export class UpdatePlantDto extends PartialType(CreatePlantDto) {}
