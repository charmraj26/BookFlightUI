import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageairlinesComponent } from './manageairlines.component';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ManageairlinesComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ]
})
export class ManageairlinesModule { }
