import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionsComponent } from './add-questions.component';

describe('AddQuestionsComponent', () => {
  let component: AddQuestionsComponent;
  let fixture: ComponentFixture<AddQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
