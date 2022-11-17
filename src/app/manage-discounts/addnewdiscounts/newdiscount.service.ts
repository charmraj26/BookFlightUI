import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddnewdiscountsModel } from './addnewdiscounts.model';

@Injectable({
  providedIn: 'root'
})
export class NewdiscountService {

  public addNewDiscountURL: string = environment.GateWayURL;

  constructor(private http: HttpClient) { }

  public newDiscountSubmit(newDiscount: AddnewdiscountsModel): Observable<any> {
    return this.http.post(this.addNewDiscountURL + '/flight/Discount', newDiscount).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    }
    console.error(error.error);
    errorMessage = error.error;
    return throwError(() => new Error(errorMessage));
  }

}
