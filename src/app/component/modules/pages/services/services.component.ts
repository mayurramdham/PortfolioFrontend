import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [
    {
      title: 'Full-Stack Web Development',
      description:
        'Building scalable, high-performance web applications using .NET Core, Angular, and MS SQL Server.',
      iconClass: 'fas fa-code',
    },
    {
      title: 'Backend Development',
      description:
        'Creating robust APIs, microservices, and authentication systems with ASP.NET Core and C#.',
      iconClass: 'fas fa-server',
    },
    {
      title: 'Frontend Development',
      description:
        'Designing responsive and dynamic UIs using Angular, modern CSS, and JavaScript frameworks.',
      iconClass: 'fas fa-desktop',
    },
    {
      title: 'Database Management',
      description:
        'Optimizing databases with MS SQL Server, Entity Framework Core, and performance tuning.',
      iconClass: 'fas fa-database',
    },
    {
      title: 'Cloud & DevOps',
      description:
        'Deploying applications on Azure, setting up CI/CD pipelines, and ensuring scalability.',
      iconClass: 'fas fa-cloud',
    },
    {
      title: 'Security & Authentication',
      description:
        'Implementing robust security protocols with JWT, OAuth, and Identity frameworks.',
      iconClass: 'fas fa-lock',
    },
  ];
}
