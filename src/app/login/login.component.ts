import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from '../snackbar.service';
import { loginUserData } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public blueBg: string= "assets/images/bluebg.jpg"
  public flightimg: string = "assets/images/flightimg.jpg"
  public loginForm: FormGroup | any;
  public submitted=false;
  public loginUserSubscription: any;
  public responseData: any;
  public loginData: any;

  constructor( private formBuilder: FormBuilder, 
    private loginService: LoginService, 
    private router: Router,
    private snackBar: SnackbarService) { 
    }

  ngOnInit(): void {
   this.loginFormGroupMethod();
  }

  private loginFormGroupMethod(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  loginSubmit(){
    this.submitted = true;
    if (!this.loginForm.valid) {
      this.snackBar.redSnackBar(`Required Mandatory Fields`, 'X');
  }else{
    let loginData = new loginUserData();
    loginData.username = this.f.username.value;
    loginData.password = this.f.password.value;

    this.loginUserSubscription = this.loginService.loginSubmit(loginData).subscribe((data:any)=>{
    if(data.status == "404"){
      this.snackBar.redSnackBar(`User doest not exixt`, 'X');
    }else{
      this.router.navigate(['/dashboard']);
    }
      

    });
  }
}
  get f() { return this.loginForm.controls; }

  ngOnDestroy(): void {
    this.loginUserSubscription?.unsubscribe();
  }

}
