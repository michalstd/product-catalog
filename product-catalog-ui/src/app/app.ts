import { Component } from '@angular/core'
import { ProductFormComponent } from './components/product-form/product-form.component'
import { ProductListComponent } from './components/product-list/product-list'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductFormComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}