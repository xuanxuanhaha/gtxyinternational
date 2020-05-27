import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseasTrainingComponent } from './overseas-training.component';

describe('OverseasTrainingComponent', () => {
  let component: OverseasTrainingComponent;
  let fixture: ComponentFixture<OverseasTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverseasTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverseasTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
