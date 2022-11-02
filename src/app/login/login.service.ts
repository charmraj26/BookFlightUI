import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginUserData } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginUrl: string = environment.GateWayURL;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  loginSubmit(userData: loginUserData): Observable<any> {
    return this.http.post(this.loginUrl + '/flight/User/login', userData);
  }

}
