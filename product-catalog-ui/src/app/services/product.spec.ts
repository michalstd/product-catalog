import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ProductService } from './product.service'

describe('ProductService', () => {

  let service: ProductService
  let httpMock: HttpTestingController

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    })

    service = TestBed.inject(ProductService)
    httpMock = TestBed.inject(HttpTestingController)

  })

  it('should fetch products from API', () => {

    const mockProducts = [
      { code: 'P1', name: 'Laptop', price: 2000 }
    ]

    service.getProducts().subscribe(products => {

      expect(products.length).toBe(1)
      expect(products[0].name).toBe('Laptop')

    })

    const req = httpMock.expectOne('http://localhost:8080/products')

    expect(req.request.method).toBe('GET')

    req.flush(mockProducts)

  })

})