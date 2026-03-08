import { Component, inject } from '@angular/core'
import { AsyncPipe, NgIf } from '@angular/common'
import { LoadingService } from '../services/loading.service'

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  template: `
    <div class="spinner" *ngIf="loading$ | async">
      Loading...
    </div>
  `
})
export class LoadingComponent {

  private loadingService = inject(LoadingService)

  loading$ = this.loadingService.loading$

}