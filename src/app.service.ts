import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { ProductDto } from './product-dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  getHello(): string {
    return 'Hello World!';
  }

  async saveProduct(payload: string) {
    const product: ProductDto = JSON.parse(payload);

    await this.cacheManager.set(product.id, payload);
  }

  async removeProduct(id: string) {
    await this.cacheManager.del(id);
  }
}
