import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoiseComponent } from './why-choise.component';

describe('WhyChoiseComponent', () => {
  let component: WhyChoiseComponent;
  let fixture: ComponentFixture<WhyChoiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyChoiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
