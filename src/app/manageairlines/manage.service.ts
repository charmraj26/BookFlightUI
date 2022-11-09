import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageService {
  public manageUrl: string = environment.GateWayURL;
  constructor(private http:HttpClient) { }

  public getManageAirline(): Observable<any>{
    return this.http.get(this.manageUrl + '/flight/Airline');
  }

 
}
