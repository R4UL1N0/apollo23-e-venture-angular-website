import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesContentComponent } from './quizzes-content.component';

describe('QuizzesContentComponent', () => {
  let component: QuizzesContentComponent;
  let fixture: ComponentFixture<QuizzesContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzesContentComponent]
    });
    fixture = TestBed.createComponent(QuizzesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
