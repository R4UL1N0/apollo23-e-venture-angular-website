import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavComponent } from './custom-nav.component';

describe('CustomNavComponent', () => {
  let component: CustomNavComponent;
  let fixture: ComponentFixture<CustomNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomNavComponent]
    });
    fixture = TestBed.createComponent(CustomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
