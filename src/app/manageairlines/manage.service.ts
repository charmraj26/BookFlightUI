import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageService {

  addairlineUrl: string = environment.GateWayURL;
  public manageUrl: string = environment.GateWayURL;

  constructor(private http: HttpClient) { }

  public getManageAirline(): Observable<any> {
    return this.http.get(this.manageUrl + '/flight/Airline');
  }

  public getPrepopulateAirline(airline_id: any): Observable<any> {
    return this.http.get(this.manageUrl + '/flight/Airline/' + airline_id);
  }

  // disable save button for prepopulate
  private _disableButton: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get disableButton(): Observable<boolean> {
    return this._disableButton.asObservable();
  }

  toogleDisable(){
    this._disableButton.next(!this._disableButton.value);
  }

}
