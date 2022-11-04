import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registerdata } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUrl:string = environment.GateWayURL;
  constructor(private http:HttpClient) { }

  public registerSubmit(user:registerdata):Observable<any>{
    return this.http.post(this.registerUrl + '/flight/User',user).pipe(
      catchError(this.handleError)
    );
  }
  public adminSubmit(admin:registerdata):Observable<any>{
    return this.http.post(this.registerUrl + '/flight/Admin',admin)
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
