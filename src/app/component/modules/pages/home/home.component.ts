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
    resumeUrl: 'path/to/your-resume.pdf',
    socialLinks: {
      github: 'https://github.com/your-github',
      linkedin: 'https://linkedin.com/in/your-linkedin',
      twitter: 'https://twitter.com/your-twitter',
      instagram: 'https://instagram.com/your-instagram',
    },
    profileImage: 'src/assets/images/profile-image.jpg',
  };
}
