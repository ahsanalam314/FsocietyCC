import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantRejectedComponent } from './applicant-rejected.component';

describe('ApplicantRejectedComponent', () => {
  let component: ApplicantRejectedComponent;
  let fixture: ComponentFixture<ApplicantRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
