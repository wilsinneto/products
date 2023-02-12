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
  async createProduct(payload: string) {
    await this.appService.saveProduct(payload);
  }

  @EventPattern('purchase-order_updated')
  async updateProduct(payload: string) {
    await this.appService.saveProduct(payload);
  }

  @EventPattern('purchase-order_removed')
  async removeProduct(id: string) {
    await this.appService.removeProduct(id);
  }
}
