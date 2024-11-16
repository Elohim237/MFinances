import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneContactComponent } from './zone-contact.component';

describe('ZoneContactComponent', () => {
  let component: ZoneContactComponent;
  let fixture: ComponentFixture<ZoneContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
