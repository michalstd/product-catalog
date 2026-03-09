import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductFormComponent } from './product-form.component'
import { ReactiveFormsModule } from '@angular/forms'
import { of } from 'rxjs'
import { ProductService } from '../../services/product.service'
import { vi } from 'vitest'

describe('ProductFormComponent', () => {

  let component: ProductFormComponent
  let fixture: ComponentFixture<ProductFormComponent>

  let productServiceMock: {
    addProduct: ReturnType<typeof vi.fn>
    notifyRefresh: ReturnType<typeof vi.fn>
  }

  beforeEach(async () => {

    productServiceMock = {
      addProduct: vi.fn().mockReturnValue(of({})),
      notifyRefresh: vi.fn()
    }

    await TestBed.configureTestingModule({
      imports: [
        ProductFormComponent,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ProductService, useValue: productServiceMock }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(ProductFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should be invalid when form is empty', () => {

    expect(component.productForm.valid).toBe(false)

  })

  it('should be valid when form is filled', () => {

    component.productForm.setValue({
      code: 'P1',
      name: 'Laptop',
      price: 2000
    })

    expect(component.productForm.valid).toBe(true)

  })

  it('should validate min price', () => {

    component.productForm.setValue({
      code: 'P1',
      name: 'Laptop',
      price: 0
    })

    expect(component.productForm.valid).toBe(false)

  })

  it('should call service when submitting valid form', () => {

    component.productForm.setValue({
      code: 'P1',
      name: 'Laptop',
      price: 2000
    })

    component.submit()

    expect(productServiceMock.addProduct).toHaveBeenCalled()

  })

})