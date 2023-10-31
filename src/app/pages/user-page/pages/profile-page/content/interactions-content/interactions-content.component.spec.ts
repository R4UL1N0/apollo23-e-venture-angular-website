import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsContentComponent } from './interactions-content.component';

describe('InteractionsContentComponent', () => {
  let component: InteractionsContentComponent;
  let fixture: ComponentFixture<InteractionsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteractionsContentComponent]
    });
    fixture = TestBed.createComponent(InteractionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
