import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MFinances';
  ngOnInit() {
    AOS.init({
      duration: 1200, // Durée de l'animation en millisecondes
      once: true, // L'animation se déclenche une seule fois
    });
  }
}
