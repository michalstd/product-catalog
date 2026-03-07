import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import { apiInterceptor } from './interceptors/api.interceptor'
import { loadingInterceptor } from './interceptors/loading.interceptor'

export const appConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideHttpClient(
  withInterceptors([apiInterceptor, loadingInterceptor])
)
  ]
}