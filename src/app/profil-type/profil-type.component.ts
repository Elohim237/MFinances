import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-type',
  templateUrl: './profil-type.component.html',
  styleUrl: './profil-type.component.css'
})
export class ProfilTypeComponent {
  currentIndex = 0;

  items = [
    { image: 'https://www.indy.fr/wp-content/uploads/slider-freelance-1.png', title: 'Freelance', description: 'Consultants, designers, développeurs, coaches...' },
    { image: 'https://www.indy.fr/wp-content/uploads/pro-sante.png', title: 'Santé', description: 'Médecin, IDEL, dentiste, sage-femme...' },
    { image: 'https://www.indy.fr/wp-content/uploads/reeduc.png', title: 'Rééducation', description: 'Kinésithérapeute, orthophoniste, podologue...' },
    { image: 'https://www.indy.fr/wp-content/uploads/reeduc.png', title: 'Société', description: 'Gérant de SAS, SASU, SARL, EURL' },
    { image: 'https://www.indy.fr/wp-content/uploads/reeduc.png', title: 'Commerçant', description: 'Coiffeur, fleuriste, vendeur, e-commerçant...' },
    { image: 'https://www.indy.fr/wp-content/uploads/pro-sante.png', title: 'SCI', description: 'Gérant de Société Civile Immobilière' },
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
