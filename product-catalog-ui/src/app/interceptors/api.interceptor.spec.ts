import { TestBed } from '@angular/core/testing'
import { HttpClient } from '@angular/common/http'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { apiInterceptor } from './api.interceptor'

describe('apiInterceptor', () => {

  let http: HttpClient
  let httpMock: HttpTestingController

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(
          withInterceptors([apiInterceptor])
        ),
        provideHttpClientTesting()
      ]
    })

    http = TestBed.inject(HttpClient)
    httpMock = TestBed.inject(HttpTestingController)

  })

  afterEach(() => {
    httpMock.verify()
  })

  it('should add Content-Type header', () => {

    http.get('/products').subscribe()

    const req = httpMock.expectOne((request) =>
      request.url.includes('/products')
    )

    expect(req.request.headers.get('Content-Type'))
      .toBe('application/json')

    req.flush({})

  })

})