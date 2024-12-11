import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePatrimonialeComponent } from './timeline-patrimoniale.component';

describe('TimelinePatrimonialeComponent', () => {
  let component: TimelinePatrimonialeComponent;
  let fixture: ComponentFixture<TimelinePatrimonialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelinePatrimonialeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinePatrimonialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
