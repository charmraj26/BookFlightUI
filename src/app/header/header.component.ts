import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginSubscription: any;
  adminSubscription:any;
  isOpen: any;
  isAdmin:any;

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginSubscription = this.loginService.getLogin.subscribe((data: any) => {
      if (data !== null && data !== undefined) {
        this.isOpen = true;
      }else{
        this.isOpen = false;
      }
    });
    this.adminSubscription = this.loginService.getLogin.subscribe((res:any) => {
      if(res !== null && res !== undefined){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
    })
  }
  
  public logoutUser(){
    this.loginService.removeToken();
    this.router.navigateByUrl('/login');   //logout
    this.isOpen = false;
  }

  ngOnDestroy(): void{
    this.loginSubscription?.unsubscribe();
  }
}
