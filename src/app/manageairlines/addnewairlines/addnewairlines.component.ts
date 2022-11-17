import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar.service';
import { ManageService } from '../manage.service';
import { AddnewairlinesModel } from './addnewairlines.model';
import { AddnewairlinesService } from './addnewairlines.service';


@Component({
  selector: 'app-addnewairlines',
  templateUrl: './addnewairlines.component.html',
  styleUrls: ['./addnewairlines.component.css']
})
export class AddnewairlinesComponent implements OnInit {
  public airlineForm: FormGroup | any;
  public submitted = false;
  public addAirlineData: any;
  public addAirlineSubscription: any;
  public disable:any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: SnackbarService,
    private addAirlineService: AddnewairlinesService,
    private route: ActivatedRoute,
    private manageService: ManageService) { }

  ngOnInit(): void {
    this.airlineFormGroupMethod();
    if (this.route.snapshot.params['airline_id'] !== undefined) {
      this.prepopulateMethod();
    }
    this.disable = this.manageService.disableButton;  //save button disabled
  }

  // prepopulate start
  prepopulateMethod() {
    this.manageService.getPrepopulateAirline(this.route.snapshot.params['airline_id']).subscribe(res => {
      this.airlineForm = new FormGroup({
        airline_name: new FormControl(res['airline_name']),
        airline_log: new FormControl(res["airline_logo"]),
        contact_number: new FormControl(res['contact_number']),
        contact_address: new FormControl(res['contact_address'])
      })
    })
  }
  // prepopulate end

  private airlineFormGroupMethod() {
    this.airlineForm = this.formBuilder.group({

      airline_name: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).{3,10}$')]],
      airline_logo: ['', Validators.required],
      contact_number: ['', Validators.required],
      contact_address: ['', Validators.required]
    })
  }
  get f() {
    return this.airlineForm.controls;
  }

  public addAirlineSubmit() {
    this.submitted = true;
    if (!this.airlineForm.valid) {
      this.snackBar.redSnackBar('Required Mandatory Fields', 'X')
    } else {
      let addAirlineData = new AddnewairlinesModel();
      addAirlineData.airline_name = this.f.airline_name.value;
      addAirlineData.airline_logo = btoa(this.f.airline_logo.value);
      addAirlineData.contact_number = this.f.contact_number.value;
      addAirlineData.contact_address = this.f.contact_address.value;

      this.addAirlineSubscription = this.addAirlineService.addAirlineSubmit(addAirlineData).subscribe((data: any) => {
        if (data.airline_name) {
          this.router.navigate(['/manageairlines']);
          this.snackBar.successSnackBar('Registerd successfully', 'X')
        }
      }, (error) => {
        this.snackBar.redSnackBar(error, 'X')
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

  toogleButtonState(){
    this.manageService.toogleDisable(); // prepopulate save button
  }
  ngOnDestroy(): void {
    this.addAirlineSubscription?.unsubscribe();
  }
}
