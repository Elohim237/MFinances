import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandationProfilComponent } from './recommandation-profil.component';

describe('RecommandationProfilComponent', () => {
  let component: RecommandationProfilComponent;
  let fixture: ComponentFixture<RecommandationProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommandationProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommandationProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
