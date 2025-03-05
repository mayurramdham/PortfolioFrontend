import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectListComponent } from './component/modules/project-list/project-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolioFrontend';
}
