import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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
    return this.http.post(this.loginUrl + '/flight/User/login', userData).pipe(
      catchError(this.handleError)
    );
  }

  adminSubmit(adminData:loginUserData): Observable<any>{
    return this.http.post(this.loginUrl + '/flight/Admin/login', adminData)
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
