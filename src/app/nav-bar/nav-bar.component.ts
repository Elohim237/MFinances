import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isSidebarActive = false;
  activeSubmenus: { [key: string]: boolean } = {};

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  toggleSubmenu(menu: string): void {
    this.activeSubmenus[menu] = !this.activeSubmenus[menu];
  }
}
