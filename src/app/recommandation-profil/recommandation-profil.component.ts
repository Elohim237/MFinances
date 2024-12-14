import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommandation-profil',
  templateUrl: './recommandation-profil.component.html',
  styleUrl: './recommandation-profil.component.css'
})
export class RecommandationProfilComponent {
  currentIndex = 0;
  filteredItems: any[] = [];
  currentRoute: string = '';

  items = [
    {
      image: 'https://www.indy.fr/wp-content/uploads/slider-freelance-1.png',
      title: 'ABSL',
      description:
        'Les Associations Sans But Lucratif en Belgique sont des structures incontournables pour porter des projets sociaux, culturels, éducatifs ou environnementaux...',
      route: '/absl',
    },
    {
      image: 'https://www.indy.fr/wp-content/uploads/pro-sante.png',
      title: 'Indépendant et Startup',
      description: 'Médecin, IDEL, dentiste, sage-femme...',
      route: '/profil-independant',
    },
    {
      image: '../../assets/img/image/profilw-societemanagement.jpg',
      title: 'Société de Management Patrimoniale',
      description:
        'La Société de Management Patrimoniale permet au dirigeant d’entreprise de facturer ses prestations à sa société d’exploitation tout en optimisant ...',
      route: '/societe-management-patrimoniale',
    },
    {
      image: 'https://www.indy.fr/wp-content/uploads/reeduc.png',
      title: 'Société',
      description: 'Gérant de SAS, SASU, SARL, EURL',
      route: '/societe',
    },
    {
      image: 'https://www.indy.fr/wp-content/uploads/reeduc.png',
      title: 'Commerçant',
      description: 'Coiffeur, fleuriste, vendeur, e-commerçant...',
      route: '/commercant',
    },
    {
      image: 'https://www.indy.fr/wp-content/uploads/pro-sante.png',
      title: 'SCI',
      description: 'Gérant de Société Civile Immobilière',
      route: '/sci',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Obtenir la route active
    this.currentRoute = this.router.url;

    // Filtrer les éléments pour ne pas inclure celui de la route actuelle
    this.filteredItems = this.items.filter((item) => item.route !== this.currentRoute);
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.filteredItems.length - 1) {
      this.currentIndex++;
    }
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 260}px)`;
  }
}
