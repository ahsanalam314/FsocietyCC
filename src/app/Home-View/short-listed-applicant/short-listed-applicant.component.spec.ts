import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortListedApplicantComponent } from './short-listed-applicant.component';

describe('ShortListedApplicantComponent', () => {
  let component: ShortListedApplicantComponent;
  let fixture: ComponentFixture<ShortListedApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortListedApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortListedApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
