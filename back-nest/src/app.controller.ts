import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// req, res에 대해 앎
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
