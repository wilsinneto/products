import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('purchase-order_created')
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log('handleMessagePrinted', data);
  }
}
