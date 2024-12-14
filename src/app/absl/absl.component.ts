import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RecommandationProfilComponent } from "../recommandation-profil/recommandation-profil.component";

@Component({
  selector: 'app-absl',
  templateUrl: './absl.component.html',
  styleUrl: './absl.component.css',
})
export class AbslComponent {
  @ViewChild('stickyContainer', { static: false }) stickyContainer!: ElementRef;
  @ViewChild('slidingImage', { static: false }) slidingImage!: ElementRef;
  @ViewChild('lastWorkItem', { static: false }) lastWorkItem!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const imageElement = this.slidingImage.nativeElement as HTMLElement;
    const lastElement = this.lastWorkItem.nativeElement as HTMLElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Fixe l'image au bas lorsque le dernier élément disparaît
          this.renderer.setStyle(imageElement, 'position', 'absolute');
          this.renderer.setStyle(imageElement, 'bottom', '0');
        } else {
          // Reprend le comportement collant si le dernier élément est visible
          this.renderer.setStyle(imageElement, 'position', 'sticky');
          this.renderer.setStyle(imageElement, 'top', '10px');
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `0px 0px -${lastElement.offsetHeight}px 0px`,
      }
    );

    observer.observe(lastElement);
  }
}
