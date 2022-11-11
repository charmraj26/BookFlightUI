import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewdiscountsComponent } from './addnewdiscounts.component';

describe('AddnewdiscountsComponent', () => {
  let component: AddnewdiscountsComponent;
  let fixture: ComponentFixture<AddnewdiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewdiscountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewdiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
