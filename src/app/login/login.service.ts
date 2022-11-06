import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
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

  loginSubmit(userData:loginUserData):Observable<any> {
    return this.http.post(this.loginUrl + `/flight/User/login`, userData).pipe(
      catchError(this.handleError)
    );
  }

  adminSubmit(adminData:loginUserData):Observable<any>{
    return this.http.post(this.loginUrl + '/flight/Admin/login', adminData)
  }

  private handleError(error: HttpErrorResponse) {
    let errormessage=''
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        ` ${error.status}, body was: `, error.error);
        errormessage=`${error.status}, body was: `, error.error;
    }
    errormessage='Something bad happened; please try again later.';
    return throwError(() => new Error('Incorrect Username or Password'));
  }

  public login = new BehaviorSubject(null);
  public getLogin = this.login.asObservable();  //login
  public setLogin(login: any) {
    this.login.next(login);
  }

}
