import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilIndependantComponent } from './profil-independant.component';

describe('ProfilIndependantComponent', () => {
  let component: ProfilIndependantComponent;
  let fixture: ComponentFixture<ProfilIndependantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilIndependantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilIndependantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
