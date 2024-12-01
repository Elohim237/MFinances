import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbslComponent } from './absl.component';

describe('AbslComponent', () => {
  let component: AbslComponent;
  let fixture: ComponentFixture<AbslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbslComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
