import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'

export const appConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideAnimations()
  ]
}