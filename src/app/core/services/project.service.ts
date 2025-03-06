import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'https://localhost:7059/api/Projects';
  constructor(private http: HttpClient) {}
  getProjects(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
