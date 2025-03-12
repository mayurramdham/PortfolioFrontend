import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  addContact(contact: any): Observable<any> {
    return this.http.post('https://localhost:7059/api/Contact', contact);
  }
}
