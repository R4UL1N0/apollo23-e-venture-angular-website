import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUnitComponent } from './user-unit.component';

describe('UserUnitComponent', () => {
  let component: UserUnitComponent;
  let fixture: ComponentFixture<UserUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserUnitComponent]
    });
    fixture = TestBed.createComponent(UserUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
