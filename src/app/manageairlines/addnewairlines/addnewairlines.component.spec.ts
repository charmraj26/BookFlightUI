import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewairlinesComponent } from './addnewairlines.component';

describe('AddnewairlinesComponent', () => {
  let component: AddnewairlinesComponent;
  let fixture: ComponentFixture<AddnewairlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewairlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewairlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
