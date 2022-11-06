import { Conditional } from '@angular/compiler';
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
  public blueBg: string = "assets/images/bluebg.jpg"
  public flightimg: string = "assets/images/flightimg.jpg"
  public loginForm: FormGroup | any;
  public loginUserSubscription: any;
  public hideEye: boolean = false;
  public adminSubscription: any;
  public submitted = false;
  public loginData: any;
  public isSelected: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackBar: SnackbarService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loginFormGroupMethod();
  }

  hideEyeText() {
    this.hideEye = !this.hideEye;
  }

  private loginFormGroupMethod() {
    this.loginForm = this.formBuilder.group({
      adminCheckbox: [''],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public loginSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      this.snackBar.redSnackBar(`Required Mandatory Fields`, 'X');

    } else if (this.loginForm.valid){
      let loginData = new loginUserData();
      loginData.username = this.f.username.value;
      loginData.password = btoa(this.f.password.value);

      if(this.isSelected){
        this.adminSubscription = this.loginService.adminSubmit(new loginUserData).subscribe(res => {
                this.router.navigate(['/dashboard']);
              })
      }else{
        this.loginUserSubscription = this.loginService.loginSubmit(loginData).subscribe(data => {
          if (data.token) {
            this.loginService.setLogin(data); //headerCondition
            this.router.navigate(['/dashboard']);
          }
        }, (error) => {
          // this.snackBar.redSnackBar(error, 'X')
        });
      }
      
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnDestroy(): void {
    this.loginUserSubscription?.unsubscribe();
  }

}
