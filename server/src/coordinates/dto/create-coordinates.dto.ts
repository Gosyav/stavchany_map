import { IsLatitude, IsLongitude, IsString } from 'class-validator';

export class CreateCoordinatesDto {
  @IsString()
  vydlisId: string;

  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;
}
