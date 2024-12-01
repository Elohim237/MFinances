import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-type',
  templateUrl: './profil-type.component.html',
  styleUrl: './profil-type.component.css'
})
export class ProfilTypeComponent {
  currentIndex = 0;

  items = [
    { image: 'https://www.indy.fr/wp-content/uploads/slider-freelance-1.png', title: 'ABSL', description: 'Les Associations Sans But Lucratif en Belgique sont des structures incontournables pour porter des projets sociaux, culturels, éducatifs ou environnementaux...',route: '/absl' },
    { image: 'https://www.indy.fr/wp-content/uploads/pro-sante.png', title: 'Indépendant et Startup', description: 'Médecin, IDEL, dentiste, sage-femme...',route: '/independant-startup' },
    { image: 'https://www.indy.fr/wp-content/uploads/reeduc.png', title: 'Sociétés commerciales', description: 'Kinésithérapeute, orthophoniste, podologue...',route: '/independant-startup' },
    { image: 'https://www.indy.fr/wp-content/uploads/reeduc.png', title: 'Société', description: 'Gérant de SAS, SASU, SARL, EURL',route: '/independant-startup' },
    { image: 'https://www.indy.fr/wp-content/uploads/reeduc.png', title: 'Commerçant', description: 'Coiffeur, fleuriste, vendeur, e-commerçant...',route: '/independant-startup' },
    { image: 'https://www.indy.fr/wp-content/uploads/pro-sante.png', title: 'SCI', description: 'Gérant de Société Civile Immobilière',route: '/independant-startup' },
  ];

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
