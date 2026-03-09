import { HttpInterceptorFn } from '@angular/common/http'
import { environment } from '../../environments/environment'

export const apiInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token')

  const apiReq = req.clone({
    url: `${environment.apiUrl}${req.url}`,
    setHeaders: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    }
  })

  return next(apiReq)

}