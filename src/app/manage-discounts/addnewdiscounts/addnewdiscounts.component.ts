import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/snackbar.service';
import { AddnewdiscountsModel } from './addnewdiscounts.model';
import { NewdiscountService } from './newdiscount.service';

@Component({
  selector: 'app-addnewdiscounts',
  templateUrl: './addnewdiscounts.component.html',
  styleUrls: ['./addnewdiscounts.component.css']
})
export class AddnewdiscountsComponent implements OnInit {

  public newDiscountForm: FormGroup | any;
  public submitted = false;
  public newDiscountSubscription: any;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: SnackbarService,
    private newDiscountService: NewdiscountService,
    private router: Router) { }

  ngOnInit(): void {
    this.newDiscountFormGroupMethod();
  }

  newDiscountFormGroupMethod() {
    this.newDiscountForm = this.formBuilder.group({
      discount_code: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).{3,10}$')]],
      discount_price: ['', Validators.required],
      discount_comment: ['', Validators.required]
    })
  }

  newDiscountSubmit() {
    this.submitted = true;
    if (!this.newDiscountForm.valid) {
      this.snackBar.redSnackBar('Required Mandatory Fields', 'X')
    } else {
      let newdiscountData = new AddnewdiscountsModel();
      newdiscountData.discount_code = this.d.discount_code.value;
      newdiscountData.discount_price = this.d.discount_price.value;
      newdiscountData.discount_comment = this.d.discount_comment.value;

      this.newDiscountSubscription = this.newDiscountService.newDiscountSubmit(newdiscountData).subscribe((data) => {
        if (data.discount_code) {
          this.router.navigate(['/managediscounts']);
          this.snackBar.successSnackBar('Add Discounts Successfully', 'x')
        }
      }, (error => {
        this.snackBar.redSnackBar(error, 'x')
      }
      )
      )
    }
  }

  get d() {
    return this.newDiscountForm.controls;
  }

  ngOnDestroy(): void {
    this.newDiscountSubscription?.unsubscribe();
  }

}
