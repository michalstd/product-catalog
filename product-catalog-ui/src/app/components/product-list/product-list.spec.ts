import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductListComponent } from './product-list'
import { ProductService } from '../../services/product.service'
import { of } from 'rxjs'
import { vi } from 'vitest'

describe('ProductListComponent', () => {

  let component: ProductListComponent
  let fixture: ComponentFixture<ProductListComponent>

  const mockProducts = [
    { code: 'P1', name: 'Laptop', price: 2000 },
    { code: 'P2', name: 'Mouse', price: 100 }
  ]

  const mockService = {
    getProducts: vi.fn().mockReturnValue(of(mockProducts)),
    getRefreshListener: vi.fn().mockReturnValue(of())
  }

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      providers: [
        { provide: ProductService, useValue: mockService }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(ProductListComponent)
    component = fixture.componentInstance

    fixture.detectChanges()

  })

  it('should load products', () => {
    expect(component.products.length).toBe(2)
  })

  it('should render table rows', () => {

    const compiled = fixture.nativeElement as HTMLElement
    const rows = compiled.querySelectorAll('table tr')

    expect(rows.length).toBeGreaterThan(1)

  })

  it('should render 3 rows in Material table', () => {

  const mockProducts = [
    { id: '1', code: 'P1', name: 'Laptop', price: 3000 },
    { id: '2', code: 'P2', name: 'Mouse', price: 100 },
    { id: '3', code: 'P3', name: 'Keyboard', price: 200 }
  ]

  component.products = mockProducts

  fixture.detectChanges()

  const rows = fixture.nativeElement.querySelectorAll('tr.mat-row')

  expect(rows.length).toBe(3)

})

})