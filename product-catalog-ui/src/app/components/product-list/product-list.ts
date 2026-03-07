import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductService } from '../../services/product.service'
import { Product } from '../../models/product'

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }
}