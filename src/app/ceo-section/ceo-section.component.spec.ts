import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoSectionComponent } from './ceo-section.component';

describe('CeoSectionComponent', () => {
  let component: CeoSectionComponent;
  let fixture: ComponentFixture<CeoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeoSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
