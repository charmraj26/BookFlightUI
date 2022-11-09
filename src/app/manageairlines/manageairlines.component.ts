import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelpopupComponent } from '../modelpopup/modelpopup.component';
import { ModelpopupService } from '../modelpopup/modelpopup.service';
import { ManageService } from './manage.service';

@Component({
  selector: 'app-manageairlines',
  templateUrl: './manageairlines.component.html',
  styleUrls: ['./manageairlines.component.css']
})
export class ManageairlinesComponent implements OnInit {

 public manageAirlines:any;
  manageAirlineSubscription: any;


  constructor(private matDialog:MatDialog,
    private manageService:ManageService,
    private modelService:ModelpopupService) { }

  ngOnInit(): void {
    this.getAllManageAirline();
  }

  public getAllManageAirline(){
    this.manageService.getManageAirline().subscribe(data=>{
      this.manageAirlines =data;
    })
  }

  viewDetails(manageAirlines:any){
    this.modelService.openConfirmDialog('' + manageAirlines).afterClosed().subscribe(res=>{
      
    })
  
  }
}
