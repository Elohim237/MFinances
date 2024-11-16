import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isSidebarActive: boolean = false;
  activeSubmenus: { [key: string]: boolean } = {};

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  toggleSubmenu(menu: string): void {
    for (let key in this.activeSubmenus) {
      if (key !== menu) {
        this.activeSubmenus[key] = false;
      }
    }
    this.activeSubmenus[menu] = !this.activeSubmenus[menu];
  }
}
