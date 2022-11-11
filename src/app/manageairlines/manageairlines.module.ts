import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageairlinesComponent } from './manageairlines.component';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    ManageairlinesComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    MatButtonToggleModule
  ]
})
export class ManageairlinesModule { }
