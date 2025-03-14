import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  home = {
    heroTitle: 'Hi, I am Mayur Ramdham',
    heroSubtitle: '.NET Full Stack Developer',
    heroDescription:
      'Passionate about building innovative applications that solve real-world problems. Committed to continuous learning and growth in the tech industry.',
    resumeUrl: 'assets/docs/Mayur_Ramdham.pdf',
    socialLinks: {
      github: 'https://github.com/mayurramdham/',
      linkedin: 'https://in.linkedin.com/in/mayurramdham02',
      twitter: 'https://x.com/mayurramdham02?t=ZaflJXTR_ODjBlqzZpnFng&s=08',
      instagram: 'https://in.linkedin.com/in/mayurramdham02',
    },
    profileImage: 'src/assets/images/profile-image.jpg',
  };
}
