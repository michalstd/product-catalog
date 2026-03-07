import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { apiInterceptor } from './api.interceptor'

describe('ApiInterceptor', () => {

  let http: HttpClient
  let httpMock: HttpTestingController

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideHttpClient(withInterceptors([apiInterceptor]))
      ]
    })

    http = TestBed.inject(HttpClient)
    httpMock = TestBed.inject(HttpTestingController)

  })

  it('should add content-type header', () => {

    http.get('/products').subscribe()

    const req = httpMock.expectOne('/products')

    expect(req.request.headers.has('Content-Type')).toBe(true)

  })

})