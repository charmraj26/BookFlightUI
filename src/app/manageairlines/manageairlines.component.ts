import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelpopupComponent } from '../modelpopup/modelpopup.component';
import { ManageService } from './manage.service';

@Component({
  selector: 'app-manageairlines',
  templateUrl: './manageairlines.component.html',
  styleUrls: ['./manageairlines.component.css']
})
export class ManageairlinesComponent implements OnInit {

  manageAirlines:any;

  constructor(private matDialog:MatDialog,
    private manageService:ManageService) { }

  ngOnInit(): void {
    this.getAllManageAirline();
  }

  public getAllManageAirline(){
    this.manageService.getManageAirline().subscribe(data=>{
      
    })
  }

  viewDetails(){
    this.matDialog.open(ModelpopupComponent);
  }

}
