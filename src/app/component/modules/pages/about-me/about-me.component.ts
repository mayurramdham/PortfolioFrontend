import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  about = {
    intro:
      'I am a passionate full-stack developer with expertise in Angular and .NET. I love building dynamic and scalable applications.',
    image: 'https://avatars.githubusercontent.com/u/93993478?v=4',
    details:
      'I have a strong background in both frontend and backend development, with experience in building enterprise-level applications and scalable web solutions.',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'SCSS',
      'Bootstrap',
      'ASP.NET Core',
      'SQL Server',
      'Entity Framework',
      'Microservices',
      'RabbitMQ',
    ],
    timeline: [
      {
        title: 'Associate Trainee - smartData Nagpur',
        description:
          'Working as a full-stack developer focusing on Angular and .NET development, including backend API development and UI design.',
        year: '2025 - Present',
      },
      {
        title: "Bachelor's in Computer Science & Engineering",
        description:
          'Graduated with a degree in Computer Science, where I built multiple projects and developed strong problem-solving skills.',
        year: '2021 - 2025',
      },
    ],
  };
}
