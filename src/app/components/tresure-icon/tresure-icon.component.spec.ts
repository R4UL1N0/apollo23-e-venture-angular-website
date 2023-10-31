import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresureIconComponent } from './tresure-icon.component';

describe('TresureIconComponent', () => {
  let component: TresureIconComponent;
  let fixture: ComponentFixture<TresureIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TresureIconComponent]
    });
    fixture = TestBed.createComponent(TresureIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
