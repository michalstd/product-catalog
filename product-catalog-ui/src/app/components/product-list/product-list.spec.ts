import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductListComponent } from './product-list.component'
import { of } from 'rxjs'
import { ProductService } from '../../services/product.service'
import { vi } from 'vitest'
import { By } from '@angular/platform-browser'

describe('ProductListComponent', () => {

  let component: ProductListComponent
  let fixture: ComponentFixture<ProductListComponent>

  const mockProducts = [
    { id: '1', code: 'P1', name: 'Laptop', price: 3000 },
    { id: '2', code: 'P2', name: 'Mouse', price: 100 },
    { id: '3', code: 'P3', name: 'Keyboard', price: 200 }
  ]

  const productServiceMock = {
    getProducts: vi.fn().mockReturnValue(of(mockProducts)),
    getRefreshListener: vi.fn().mockReturnValue(of(true))
  }

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      providers: [
        { provide: ProductService, useValue: productServiceMock }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(ProductListComponent)
    component = fixture.componentInstance

    fixture.detectChanges()

  })

  it('should create', () => {

    expect(component).toBeTruthy()

  })

  it('should load products from service', () => {

    expect(productServiceMock.getProducts).toHaveBeenCalled()

    expect(component.products.length).toBe(3)

  })

})