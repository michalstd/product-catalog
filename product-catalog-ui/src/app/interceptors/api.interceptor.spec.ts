import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http'
import { apiInterceptor } from './api.interceptor'

describe('ApiInterceptor', () => {

  let http: HttpClient
  let httpMock: HttpTestingController

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: apiInterceptor,
          multi: true
        }
      ]
    })

    http = TestBed.inject(HttpClient)
    httpMock = TestBed.inject(HttpTestingController)

  })

  it('should add content-type header', () => {

    http.get('/products').subscribe()

    const req = httpMock.expectOne('/products')

    expect(req.request.headers.has('Content-Type')).toBe(true)

    req.flush({})

  })

})