import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelpopupComponent } from './modelpopup.component';

@Injectable({
  providedIn: 'root'
})
export class ModelpopupService {

  constructor(private matdialog:MatDialog) { }

  public openConfirmDialog(msg: string) {
    return this.matdialog.open(ModelpopupComponent, {
      width: '350px',
      panelClass: 'confirm-dialog-container',
      
      position: { top: '250px' },
      data: {
        message: msg
      }
    });
  }
}