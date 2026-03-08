import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { ProductFormComponent } from './product-form.component'
import { ProductService } from '../../services/product.service'
import { Router } from '@angular/router'
import { of } from 'rxjs'
import { vi } from 'vitest'

describe('ProductFormComponent', () => {

  let component: ProductFormComponent
  let fixture: ComponentFixture<ProductFormComponent>

  const mockService = {
    addProduct: vi.fn().mockReturnValue(of({})),
    notifyRefresh: vi.fn()
  }

  const routerMock = {
  navigate: vi.fn()
}

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ProductFormComponent
      ],
      providers: [
        { provide: ProductService, useValue: mockService },
        { provide: Router, useValue: routerMock }
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

  it('should be invalid when form is empty', () => {

  component.productForm.setValue({
    code: '',
    name: '',
    price: null
  })

  expect(component.productForm.valid).toBe(false)

  it('should be valid when form is filled', () => {

  component.productForm.setValue({
    code: 'P1',
    name: 'Laptop',
    price: 3000
  })

  expect(component.productForm.valid).toBe(true)

  it('should navigate to products after submit', () => {

  component.productForm.setValue({
    code: 'P1',
    name: 'Laptop',
    price: 3000
  })

  component.submit()

  expect(routerMock.navigate).toHaveBeenCalledWith(['/products'])

})

})

})

})