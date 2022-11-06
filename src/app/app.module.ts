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
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ManageService } from './manageairlines/manage.service';
import { ManageairlinesModule } from './manageairlines/manageairlines.module';
import { ModelpopupComponent } from './modelpopup/modelpopup.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ModelpopupComponent,
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
    MatIconModule,
    MatToolbarModule,
    ManageairlinesModule,
    MatDialogModule
    
  ],
  providers: [RegisterService,LoginService,ManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
