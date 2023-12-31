import { Injectable } from '@angular/core';
import { Contact, Project, Skill } from '../interfaces/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<{projects: Project[]}>('../../assets/data/projects.json')
      .pipe(map(data => data.projects));
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('../../assets/data/skills.json');
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('../../assets/data/contact.json');
  }
}
