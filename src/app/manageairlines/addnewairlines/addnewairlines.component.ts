import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar.service';
import { ManageService } from '../manage.service';
import { AddnewairlinesModel } from './addnewairlines.model';

@Component({
  selector: 'app-addnewairlines',
  templateUrl: './addnewairlines.component.html',
  styleUrls: ['./addnewairlines.component.css']
})
export class AddnewairlinesComponent implements OnInit {
  public airlineForm: FormGroup | any;
  submitted = false;
  addAirlineData:any;
  addAirlineSubscription:any;
  
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private snackBar:SnackbarService,
              private addAirlineService:ManageService) { }

  ngOnInit(): void {
    this.airlineFormGroupMethod();
  }
  private airlineFormGroupMethod(){
    this.airlineForm = this.formBuilder.group({
      AirlineName:['',[Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).{3,10}$')]],
      UploadLogo:['',Validators.required],
      ContactNumber:['',Validators.required],
      ContactAddress:['',Validators.required]
    })
  }
   get f() {
    return this.airlineForm.controls;
  }
  
  public addAirlineSubmit(){
    this.submitted = true;
    if(!this.airlineForm.valid){
      this.snackBar.redSnackBar('Required Mandatory Fields', 'X')
    }else{
      let addAirlineData = new AddnewairlinesModel();
      addAirlineData.AirlineName = this.f.AirlineName.value;
      addAirlineData.UploadLogo = btoa(this.f.UploadLogo.value);
      addAirlineData.ContactNumber = this.f.ContactNumber.value;
      addAirlineData.ContactAddress = this.f.ContactAddress.value;

      this.addAirlineSubscription = this.addAirlineService.addAirlineSubmit(this.addAirlineData).subscribe((data:any) =>{
         return this.router.navigate(['/manageairlines'])
      })
    }
  }

  ngOnDestroy(): void {
    this.addAirlineSubscription?.unsubscribe();
  }
}
