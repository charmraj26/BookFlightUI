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
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
