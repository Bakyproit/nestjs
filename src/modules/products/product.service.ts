import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductService {
  getProducts(): string {
    return 'GET LIST PRODUCTS'
  }
  createProduct(): string {
    return 'POST PRODUCTS'
  }
  detailProduct(): string {
    return 'DETAIL PRODUCTS'
  }
  updateProduct(): string {
    return 'UPDATE PRODUCTS'
  }
  deleteProduct(): string {
    return 'DELETE PRODUCTS'
  }
}
