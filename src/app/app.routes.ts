import { Routes } from '@angular/router';
import { ProjectListComponent } from './component/modules/pages/project-list/project-list.component';
import { AboutMeComponent } from './component/modules/pages/about-me/about-me.component';
import { HomeComponent } from './component/modules/pages/home/home.component';
import { ContactUsComponent } from './component/modules/pages/contact-us/contact-us.component';
import { ServicesComponent } from './component/modules/pages/services/services.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'project',
    component: ProjectListComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
];
