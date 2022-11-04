import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  error: any;

  constructor(private snackBar:MatSnackBar ) { }

  public redSnackBar(displayMessage: string, buttonText: string) {
    this.snackBar.open  (displayMessage, buttonText, {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['failure-snackbar', 'btnfail-snackbar']
    })
  }

  public successSnackBar(displayMessage: string, buttonText: string) {
    this.snackBar.open(displayMessage, buttonText, {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar', 'btnsuc-snackbar']
    })
  }

  public warningSnackBar(displayMessage:string, buttonText:string){
    this.snackBar.open(displayMessage,buttonText,{
      duration:1000,
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass:['warning-snackbar', 'btnwarn-snackbar']
    })
  }
}
