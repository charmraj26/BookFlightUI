import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddnewairlinesModel } from './addnewairlines.model';

@Injectable({
  providedIn: 'root'
})
export class AddnewairlinesService {
public addnewAirlineURL:string = environment.GateWayURL;

  constructor(private http:HttpClient) { }

  public addAirlineSubmit(Airline:AddnewairlinesModel):Observable<any>{
    return this.http.post(this.addnewAirlineURL + '/flight/Airline',Airline).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage ='';

    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } 
    console.error(error.error);
      errorMessage = error.error;
    return throwError(() => new Error(errorMessage));
  }
}