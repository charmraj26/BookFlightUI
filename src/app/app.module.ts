import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { RegisterService } from './register/register.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    RegisterModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [RegisterService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
