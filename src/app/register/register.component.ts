import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  registerData:any;
  constructor(private formBuilder: FormBuilder,
              private registerService:RegisterService,
              private router:Router) { }

  mustMatch(password: any, confirm_passWord: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirm_passwordcontrol = formGroup.controls[confirm_passWord];
      if (confirm_passwordcontrol.errors && !confirm_passwordcontrol.errors['mustMatch']) {
        return;
      }
      if (passwordcontrol.value !== confirm_passwordcontrol.value) {
        confirm_passwordcontrol.setErrors({ mustMatch: true });
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
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
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
      alert('provide all required fields')
    }
    else{
      let registerData = new registerdata();
      registerData.username = this.f.username.value;
      registerData.password = this.f.password.value;
      registerData.confirm_password = this.f.confirm_password.value;
      registerData.email = this.f.email.value;

      this.registerSubscription = this.registerService.registerSubmit(registerData).subscribe((data:any)=>{
   
          this.router.navigate(['/login']);
        
      })  
    }
  }
  ngOnDestroy(): void {
    this.registerSubscription?.unsubscribe();
  }
}
