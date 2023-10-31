import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventProfilePageComponent } from './event-profile-page.component';

describe('EventProfilePageComponent', () => {
  let component: EventProfilePageComponent;
  let fixture: ComponentFixture<EventProfilePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventProfilePageComponent]
    });
    fixture = TestBed.createComponent(EventProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
