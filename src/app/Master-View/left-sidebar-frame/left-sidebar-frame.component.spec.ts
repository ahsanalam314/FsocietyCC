import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarFrameComponent } from './left-sidebar-frame.component';

describe('LeftSidebarFrameComponent', () => {
  let component: LeftSidebarFrameComponent;
  let fixture: ComponentFixture<LeftSidebarFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSidebarFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebarFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
