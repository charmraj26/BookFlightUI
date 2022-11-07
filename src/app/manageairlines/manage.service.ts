import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddnewairlinesModel } from './addnewairlines/addnewairlines.model';


@Injectable({
  providedIn: 'root'
})
export class ManageService {
  addairlineUrl:string = environment.GateWayURL;
  public manageUrl: string = environment.GateWayURL;

  constructor(private http:HttpClient) { }

  public getManageAirline(): Observable<any>{
    return this.http.get(this.manageUrl + '/flight/Airline');
  }

  public addAirlineSubmit(airline:AddnewairlinesModel):Observable<any>{
    return this.http.post(this.addairlineUrl + '/flight/Admin',airline)
   }

}
