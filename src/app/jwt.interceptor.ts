import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login/login.service";

@Injectable()
export class JWTInterceptor implements HttpInterceptor{

    constructor(private inject:Injector){}

intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        let loginService = this.inject.get(LoginService)
        let token = loginService.GetToken()
            let jwtToken = request.clone({
                setHeaders:{
                    Authorization: `Bearer` + token
                }
            });
            return next.handle(jwtToken);
    }

}
  