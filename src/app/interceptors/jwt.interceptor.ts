import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthService, private _router: Router) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers : any = {};
    if(this._auth.isLogged()){
      headers = {
        ...headers,
        Authentication: `${this._auth.getToken()}`
      };
    }
      request = request.clone({setHeaders: headers})

      return next.handle(request).pipe(tap((value: HttpEvent<any>) => {

      }), catchError((err: HttpErrorResponse) => {
        if(err.status === 403 && this._router.routerState.snapshot.url !== '/login'){
          this._auth.logOut()
        } else if (err.status === 401){
          this._auth.logOut()
        }
        return throwError(err);
      }))

  }
}
