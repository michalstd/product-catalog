import { Component } from '@angular/core'
import { ProductFormComponent } from './components/product-form/product-form.component'
import { ProductListComponent } from './components/product-list/product-list'
import { LoadingComponent } from './components/loading.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductFormComponent,
    ProductListComponent,
    LoadingComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent {}