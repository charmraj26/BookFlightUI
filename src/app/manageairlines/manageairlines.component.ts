import { Component, OnInit } from '@angular/core';
import { ManageService } from './manage.service';

@Component({
  selector: 'app-manageairlines',
  templateUrl: './manageairlines.component.html',
  styleUrls: ['./manageairlines.component.css']
})
export class ManageairlinesComponent implements OnInit {

  public manageAirlines: any;
  public manageAirlineSubscription: any;

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
    this.getAllManageAirline();
  }

  public getAllManageAirline() {
    this.manageService.getManageAirline().subscribe(data => {
      this.manageAirlines = data;
    })
  }

  toogleButtonState(){
    this.manageService.toogleDisable(); // prepopulate save button
  }

}
