import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilTypeComponent } from './profil-type.component';

describe('ProfilTypeComponent', () => {
  let component: ProfilTypeComponent;
  let fixture: ComponentFixture<ProfilTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
