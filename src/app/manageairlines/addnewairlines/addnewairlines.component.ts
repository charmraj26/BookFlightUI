import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
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
              private addAirlineService:ManageService,
              private route: ActivatedRoute) { }


  // prepopulated Start

  viewAirline = new FormGroup({
    airline_name: new FormControl(''),
    airline_logo:new FormControl(''),
    contact_number:new FormControl(''),
    contact_address:new FormControl('')
  })

  prepopulateMethod(){
  
  }
  

  // prepopulated End

  ngOnInit(): void {
    this.airlineFormGroupMethod();
    this.prepopulateMethod();
  }

  private airlineFormGroupMethod(){
    this.airlineForm = this.formBuilder.group({
      
      airline_name:['',[Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).{3,10}$')]],
      airline_logo:['',Validators.required],
      contact_number:['',Validators.required],
      contact_address:['',Validators.required]
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
      addAirlineData.airline_name = this.f.airline_name.value;
      addAirlineData.airline_logo = btoa(this.f.airline_logo.value);
      addAirlineData.contact_number = this.f.contact_number.value;
      addAirlineData.contact_address = this.f.contact_address.value;

      this.addAirlineSubscription = this.addAirlineService.addAirlineSubmit(addAirlineData).subscribe((data:any) =>{
        if(data){
          this.router.navigate(['/manageairlines']);
          this.snackBar.successSnackBar('Registerd successfully','X')
        }
          
      })
    }
  }
  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  ngOnDestroy(): void {
    this.addAirlineSubscription?.unsubscribe();
  }
}
