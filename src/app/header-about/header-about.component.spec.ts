import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAboutComponent } from './header-about.component';

describe('HeaderAboutComponent', () => {
  let component: HeaderAboutComponent;
  let fixture: ComponentFixture<HeaderAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
