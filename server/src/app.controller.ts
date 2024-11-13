import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): string {
    return this.appService.getTest();
  }

  // @Get('/create')
  // async create() {
  //   return await this.appService.create();
  // }

  // @Get('/delete')
  // async delete() {
  //   return await this.appService.delete();
  // }
}
