import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressContentComponent } from './progress-content.component';

describe('ProgressContentComponent', () => {
  let component: ProgressContentComponent;
  let fixture: ComponentFixture<ProgressContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressContentComponent]
    });
    fixture = TestBed.createComponent(ProgressContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
