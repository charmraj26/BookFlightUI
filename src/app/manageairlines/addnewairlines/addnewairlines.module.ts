import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddnewairlinesComponent } from './addnewairlines.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddnewairlinesComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class AddnewairlinesModule { }
