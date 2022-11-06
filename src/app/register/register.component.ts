import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from '../snackbar.service';
import { registerdata } from './register.model';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public RegisterForm: FormGroup | any;
  submitted = false;
  registerSubscription: any;
  adminSubscription:any
  registerData:any;
  fieldTextType: boolean= false;
  fieldTextTypes:boolean= false;
  isCheckBox: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private registerService:RegisterService,
              private router:Router,
              private snackBar:SnackbarService) { }

  mustMatch(password: any, confirm_passWord: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirm_passwordcontrol = formGroup.controls[confirm_passWord];
      if (confirm_passwordcontrol.errors && !confirm_passwordcontrol.errors['mustMatch']) {
        return;
      }
      if (passwordcontrol.value !== confirm_passwordcontrol.value) {
        confirm_passwordcontrol.setErrors({ mustMatch: true });
        this.snackBar.warningSnackBar('Password & Confirm Password should be same', 'X')
      } else {
        confirm_passwordcontrol.setErrors(null);
      }
    }
  }

  ngOnInit(): void {
    this.registerFormGroupMethod();
  }
  private registerFormGroupMethod() {
    this.RegisterForm = this.formBuilder.group({
      admin:[''],
      username: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirm_password: ['', [Validators.required,Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    }, {
      validator: this.mustMatch('password', 'confirm_password')
    });
  }
  get f() {
    return this.RegisterForm.controls;
   }
  
  public registerSubmit() {
    this.submitted = true;
    if(!this.RegisterForm.valid){
      this.snackBar.redSnackBar('Required Mandatory Fields', 'X')   
    }
    else if(this.RegisterForm.valid){ 
      let registerData = new registerdata();
      registerData.username = this.f.username.value;
      registerData.password = btoa(this.f.password.value);
      registerData.confirm_password = btoa(this.f.confirm_password.value);
      registerData.email = this.f.email.value;
      
      if(this.isCheckBox) { 
        this.adminSubscription = this.registerService.adminSubmit(this.registerData).subscribe((data:any)=>{
          this.router.navigate(['/login']);  
        })
      } else {
        this.registerSubscription = this.registerService.registerSubmit(registerData).subscribe((data:any)=>{
          if(data.user_id){
            this.router.navigate(['/login']);
            this.snackBar.successSnackBar('Registered successfully', 'X')
          }       
        },(error)=>{
           this.snackBar.redSnackBar( error, 'X')
          })  
      }
    }
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleFieldTextTypes(){
    this.fieldTextTypes = !this.fieldTextTypes;
  }

  ngOnDestroy(): void {
    this.registerSubscription?.unsubscribe();
  }
}
