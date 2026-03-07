import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ProductService } from '../../services/product.service'
import { Product } from '../../models/product'

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.css'
})
export class ProductFormComponent {

  product: Product = {
    code: '',
    name: '',
    price: 0
  }

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.product)
      .subscribe(() => {
        alert("Produkt dodany")
        this.product = { code: '', name: '', price: 0 }
      })
  }
}