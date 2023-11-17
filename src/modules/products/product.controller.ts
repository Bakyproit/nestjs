import { Controller, Delete, Get, Post, Put } from '@nestjs/common'

//vì api có đường dẫn tới products
@Controller('products')
export class ProductController {
  @Get()
  getProsucts(): string {
    return 'GET LIST PRODUCTS'
  }

  @Post()
  createProduct(): string {
    return 'POST PRODUCTS'
  }

  @Get('/:id')
  detailProduct(): string {
    return 'DETAIL PRODUCT'
  }

  @Put('/:id')
  updateProduct(): string {
    return 'UPDATE PRODUCT'
  }

  @Delete('/:id')
  deleteProduct(): string {
    return 'DELETE PRODUCT'
  }
}
