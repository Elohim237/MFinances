import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSocieteManagementPatrimonialeComponent } from './profil-societe-management-patrimoniale.component';

describe('ProfilSocieteManagementPatrimonialeComponent', () => {
  let component: ProfilSocieteManagementPatrimonialeComponent;
  let fixture: ComponentFixture<ProfilSocieteManagementPatrimonialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilSocieteManagementPatrimonialeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilSocieteManagementPatrimonialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
