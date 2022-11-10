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
  public block: boolean = false;

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
    this.getAllManageAirline();
  }

  onClick(){
    this.block = !this.block;
  }

  public getAllManageAirline() {
    this.manageService.getManageAirline().subscribe(data => {
      this.manageAirlines = data;
    })
  }
}
