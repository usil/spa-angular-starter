import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { ExampleService } from './example.service';
export const InterceptorSkipHeader = 'X-Skip-Interceptor';
@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  constructor(private exampleService: ExampleService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.headers.has(InterceptorSkipHeader)) {
      const headers = request.headers.delete(InterceptorSkipHeader);
      return next.handle(request.clone({ headers }));
    }
    return this.exampleService.getSettings().pipe(
      switchMap((response: any) => {
        if (response.signedUserDetails) {
          const secureRequest = request.clone({
            setHeaders: {
              Authorization: `BEARER ${response.signedUserDetails.accessToken}`,
            },
          });
          return next.handle(secureRequest);
        }
        return next.handle(request);
      })
    );
  }
}
