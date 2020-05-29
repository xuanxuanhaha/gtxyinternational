import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseasStudentsComponent } from './overseas-students.component';

describe('OverseasStudentsComponent', () => {
  let component: OverseasStudentsComponent;
  let fixture: ComponentFixture<OverseasStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverseasStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverseasStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
