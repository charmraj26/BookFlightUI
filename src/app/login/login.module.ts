import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class LoginModule { }
