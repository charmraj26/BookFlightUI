import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageDiscountsService {
  manageURL:string = environment.GateWayURL
  constructor(private http:HttpClient) { }
  
  public manageDiscount():Observable<any>{
    return this.http.get(this.manageURL + '/flight/Discount')
  }
}
