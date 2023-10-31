import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUnitComponent } from './event-unit.component';

describe('EventUnitComponent', () => {
  let component: EventUnitComponent;
  let fixture: ComponentFixture<EventUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventUnitComponent]
    });
    fixture = TestBed.createComponent(EventUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
