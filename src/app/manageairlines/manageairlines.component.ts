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
  public blockUserSubscription: any;

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
    this.getAllManageAirline();
  }

  public getAllManageAirline() {
    this.manageService.getManageAirline().subscribe(data => {
      this.manageAirlines = data;
    })
  }

  onToggleBlock(e: any,is_blocked:any) {
   console.log(is_blocked)
    
     
      if(is_blocked== 0){
        this.blockUserSubscription = this.manageService.putBlockAirline(is_blocked).subscribe((data)=>{
        is_blocked== 0
      
     })
    }
  }

  toogleButtonState() {
    this.manageService.toogleDisable(); // prepopulate save button
  }

}
