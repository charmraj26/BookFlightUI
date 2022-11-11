import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddnewdiscountsComponent } from './addnewdiscounts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddnewdiscountsComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AddnewdiscountsModule { }
