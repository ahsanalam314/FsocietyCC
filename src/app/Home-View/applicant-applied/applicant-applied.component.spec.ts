import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAppliedComponent } from './applicant-applied.component';

describe('ApplicantAppliedComponent', () => {
  let component: ApplicantAppliedComponent;
  let fixture: ComponentFixture<ApplicantAppliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantAppliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
