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
  adminSubscription: any;
  isOpen: any;

  constructor(private loginService: LoginService,
    private route: Router) { }

  ngOnInit(): void {
    this.loginSubscription = this.loginService.getLogin.subscribe((data: any) => {
      if (data !== null && data !== undefined) {
        this.isOpen = true;
      }
    });
  }

  logout() {
    this.loginService.removeToken();
    this.isOpen = false;
    this.route.navigate(['/login'])
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }

}
