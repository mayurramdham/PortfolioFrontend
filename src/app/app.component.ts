import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { ProjectListComponent } from './component/modules/pages/project-list/project-list.component';
import { AboutMeComponent } from './component/modules/pages/about-me/about-me.component';
import { NavbarComponent } from './component/utility/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'portfolioFrontend';
  loader: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }
}
