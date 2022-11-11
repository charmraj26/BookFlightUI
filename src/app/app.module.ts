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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ManageService } from './manageairlines/manage.service';
import { ManageairlinesModule } from './manageairlines/manageairlines.module';
import { ModelpopupComponent } from './modelpopup/modelpopup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddnewairlinesModule } from './manageairlines/addnewairlines/addnewairlines.module';
import { AddnewairlinesService } from './manageairlines/addnewairlines/addnewairlines.service';
import { ManageDiscountsModule } from './manage-discounts/manage-discounts.module';
import { ManageDiscountsService } from './manage-discounts/manage-discounts.service';
import { NewdiscountService } from './manage-discounts/addnewdiscounts/newdiscount.service';
import { AddnewdiscountsModule } from './manage-discounts/addnewdiscounts/addnewdiscounts.module';




@NgModule({
  declarations: [
    AppComponent,
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
    MatDialogModule,
    AddnewairlinesModule,
    ManageDiscountsModule,
    AddnewdiscountsModule

  ],
  providers: [
    RegisterService,
    LoginService,
    ManageService,
    AddnewairlinesService,
    ManageDiscountsService,
    NewdiscountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
