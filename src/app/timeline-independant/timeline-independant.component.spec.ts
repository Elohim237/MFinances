import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineIndependantComponent } from './timeline-independant.component';

describe('TimelineIndependantComponent', () => {
  let component: TimelineIndependantComponent;
  let fixture: ComponentFixture<TimelineIndependantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineIndependantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineIndependantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
