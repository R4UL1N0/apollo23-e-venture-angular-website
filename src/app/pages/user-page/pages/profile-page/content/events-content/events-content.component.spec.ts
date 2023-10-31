import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsContentComponent } from './events-content.component';

describe('EventsContentComponent', () => {
  let component: EventsContentComponent;
  let fixture: ComponentFixture<EventsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsContentComponent]
    });
    fixture = TestBed.createComponent(EventsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
