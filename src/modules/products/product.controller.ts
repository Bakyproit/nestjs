import { Controller, Delete, Get, Post, Put } from '@nestjs/common'
import { ProductService } from './product.service'
import { ResponseData } from 'src/global/global.Class'
import { HttpMessage, HttpStatus } from 'src/global/globalEnum'

//vì api có đường dẫn tới products
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getProsucts(): ResponseData<string> {
    try {
      return new ResponseData<string>(this.productService.getProducts(), HttpStatus.SUSSESS, HttpMessage.SUSSESS)
    } catch (error) {
      return new ResponseData<string>(this.productService.getProducts(), HttpStatus.ERROR, HttpMessage.ERROR)
    }
  }

  @Post()
  createProduct(): string {
    return this.productService.createProduct()
  }

  @Get('/:id')
  detailProduct(): string {
    return this.productService.detailProduct()
  }

  @Put('/:id')
  updateProduct(): string {
    return this.productService.updateProduct()
  }

  @Delete('/:id')
  deleteProduct(): string {
    return this.productService.deleteProduct()
  }
}
