import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../login/authentication.service';

@Injectable()
export class JWTIntercepteurService {

  constructor(private authenticationService : AuthenticationService) { }

  intercept(request:HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    const jwtToken = this.authenticationService.token;
    const clone= request.clone({setHeaders:{Authorization:`Bearer ${jwtToken}`}})
    return next.handle(clone);
  }
}
