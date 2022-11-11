import { Component, OnInit } from '@angular/core';
import { ManageDiscountsService } from './manage-discounts.service';

@Component({
  selector: 'app-manage-discounts',
  templateUrl: './manage-discounts.component.html',
  styleUrls: ['./manage-discounts.component.css']
})
export class ManageDiscountsComponent implements OnInit {
  public managediscount: any;
  public submitted = true
  constructor(private manageService: ManageDiscountsService) { }

  ngOnInit(): void {
    this.manage_discount();
  }

  manage_discount() {
    this.manageService.manageDiscount().subscribe(data => {
      this.managediscount=data;

    })
  }
}
