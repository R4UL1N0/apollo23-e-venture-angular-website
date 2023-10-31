import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOptionsListComponent } from './page-options-list.component';

describe('PageOptionsListComponent', () => {
  let component: PageOptionsListComponent;
  let fixture: ComponentFixture<PageOptionsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageOptionsListComponent]
    });
    fixture = TestBed.createComponent(PageOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
