import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  isNavbarVisible = true;
  private scrollTimeout: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarVisible = false; // Hide navbar when scrolling

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isNavbarVisible = true; // Show navbar when scrolling stops
    }, 500); // Adjust delay as needed
  }
}
