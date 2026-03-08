import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ProductService } from '../../services/product.service'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.css'
})
export class ProductFormComponent {

  productForm: FormGroup

  constructor(
  private fb: FormBuilder,
  private productService: ProductService,
  private router: Router
) {

    this.productForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]]
    })
  }

 submit() {

  if(this.productForm.invalid)
    return

  this.productService.addProduct(this.productForm.value)
    .subscribe(() => {

      this.productForm.reset({
        code: '',
        name: '',
        price: 0
      })

      this.productService.notifyRefresh()

      this.router.navigate(['/products'])

    })
  }
}