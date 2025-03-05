import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  projects = [
    {
      id: 1,
      title: 'AI Chatbot Platform',
      description: 'An AI-powered chatbot solution for automation.',
      imageUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/023/030/611/small_2x/artificial-intelligence-ai-business-people-showing-future-technology-photo.jpg',
      liveUrl: 'https://example.com/live',
      repoUrl: 'https://github.com/example/repo',
      techStack: 'Angular, Node.js, AI, MongoDB',
    },
    {
      id: 2,
      title: 'Crypto Trading Dashboard',
      description: 'A real-time analytics dashboard for crypto traders.',
      imageUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/023/030/611/small_2x/artificial-intelligence-ai-business-people-showing-future-technology-photo.jpg',
      liveUrl: 'https://example.com/live',
      repoUrl: 'https://github.com/example/repo',
      techStack: 'Angular, .NET Core, WebSockets',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A Kanban-style project management tool.',
      imageUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/023/030/611/small_2x/artificial-intelligence-ai-business-people-showing-future-technology-photo.jpg',
      liveUrl: 'https://example.com/live',
      repoUrl: 'https://github.com/example/repo',
      techStack: 'Angular, Firebase, Tailwind CSS',
    },
  ];
}
