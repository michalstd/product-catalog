import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductService } from '../../services/product.service'
import { Product } from '../../models/product'
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    this.loadProducts()

    this.productService.getRefreshListener()
      .subscribe(() => {
        this.loadProducts()
      })
  }

  loadProducts() {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data
      })
  }

}