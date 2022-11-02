import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class RegisterModule { }
