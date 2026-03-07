import { TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'

describe('Routing', () => {

  let router: Router

  beforeEach(async () => {

    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes)
      ]
    })

    router = TestBed.inject(Router)

  })

  it('should navigate to root', async () => {

    const result = await router.navigate([''])

    expect(result).toBe(true)

  })

})