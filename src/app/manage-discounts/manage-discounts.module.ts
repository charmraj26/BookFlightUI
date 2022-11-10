import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageDiscountsComponent } from './manage-discounts.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ManageDiscountsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class ManageDiscountsModule { }
