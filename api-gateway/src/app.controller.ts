import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomHelloById } from './models/ReqRes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('helloworld')
  getHelloWorld() {
    return this.appService.getHelloWorld();
  }

  @Post('customhello')
  getCustomHello(@Body() body: CustomHelloById) {
    return this.appService.getCustomHello(body);
  }
}
