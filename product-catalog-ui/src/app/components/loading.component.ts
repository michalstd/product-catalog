import { Component } from '@angular/core'
import { LoadingService } from '../services/loading.service'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="spinner" *ngIf="loading$ | async">
      Loading...
    </div>
  `
})
export class LoadingComponent {

  loading$ = this.loadingService.loading$

  constructor(private loadingService: LoadingService) {}

}