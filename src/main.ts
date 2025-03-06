import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ProjectListComponent } from './app/component/modules/project-list/project-list.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );
// bootstrapApplication(ProjectListComponent, {
//   providers: [provideHttpClient()],
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()], // Add this to provide HttpClient
}).catch((err) => console.error(err));
