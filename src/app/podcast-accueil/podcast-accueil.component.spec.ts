import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastAccueilComponent } from './podcast-accueil.component';

describe('PodcastAccueilComponent', () => {
  let component: PodcastAccueilComponent;
  let fixture: ComponentFixture<PodcastAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PodcastAccueilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
