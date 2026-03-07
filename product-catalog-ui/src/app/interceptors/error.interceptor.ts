import { HttpInterceptorFn } from '@angular/common/http'
import { catchError, throwError } from 'rxjs'

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    catchError(err => {

      alert(err.error?.message || 'Server error')

      return throwError(() => err)
    })
  )

}