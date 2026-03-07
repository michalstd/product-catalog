import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { ProductFormComponent } from './product-form.component'
import { ProductService } from '../../services/product.service'
import { of } from 'rxjs'
import { vi } from 'vitest'

describe('ProductFormComponent', () => {

  let component: ProductFormComponent
  let fixture: ComponentFixture<ProductFormComponent>

  const mockService = {
    addProduct: vi.fn().mockReturnValue(of({}))
  }

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ProductFormComponent
      ],
      providers: [
        { provide: ProductService, useValue: mockService }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(ProductFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

  })

  it('should create form', () => {
    expect(component).toBeTruthy()
  })

  it('form should be invalid when empty', () => {
    expect(component.productForm.valid).toBe(false)
  })

  it('should validate required fields', () => {

    component.productForm.setValue({
      code: '',
      name: '',
      price: null
    })

    expect(component.productForm.valid).toBe(false)

  })

  it('should submit when form valid', () => {

    component.productForm.setValue({
      code: 'P1',
      name: 'Laptop',
      price: 2000
    })

    component.submit()

    expect(mockService.addProduct).toHaveBeenCalled()

  })

  it('should validate min price', () => {

  component.productForm.setValue({
    code: 'P1',
    name: 'Laptop',
    price: 0
  })

  expect(component.productForm.valid).toBe(false)

})

})