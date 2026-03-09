import { TestBed } from '@angular/core/testing'
import { provideRouter, Router } from '@angular/router'
import { routes } from './app.routes'

describe('Routing', () => {

  let router: Router

  beforeEach(() => {

    TestBed.resetTestingModule()

    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes)
      ]
    })

    router = TestBed.inject(Router)

  })

  it('should navigate to root', async () => {

    await router.navigate(['/'])

    expect(router.url).toBe('/')

  })

})