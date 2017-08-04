import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInterviewComponent } from './about-interview.component';

describe('AboutInterviewComponent', () => {
  let component: AboutInterviewComponent;
  let fixture: ComponentFixture<AboutInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
