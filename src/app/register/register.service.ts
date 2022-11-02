import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registerdata } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl:string = environment.GateWayURL;
  constructor(private http:HttpClient) { }

  public registerSubmit(user:registerdata):Observable<any>{
    return this.http.post(this.registerUrl + '/flight/User',user);
  }
}
