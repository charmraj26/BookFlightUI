import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private inject: Injector){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let loginService = this.inject.get(LoginService)
        let token = loginService.GetToken()
        let jwtToken = req.clone({
            setHeaders:{
                Authorization: 'Bearer ' + token
            }
        });
        return next.handle(jwtToken); 
    }
}