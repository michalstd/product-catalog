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

  afterEach(() => {
    httpMock.verify()
  })

  it('should fetch products from API', () => {

    const mockProducts = [
      { id: 1, code: 'P1', name: 'Laptop', price: 3000 }
    ]

    service.getProducts().subscribe(products => {
      expect(products.length).toBe(1)
    })

    const req = httpMock.expectOne(req => req.url.includes('/products'))

    expect(req.request.method).toBe('GET')

    req.flush(mockProducts)

  })

})