import { Injectable } from '@angular/core';
import { Project, Technology } from '../interfaces/data';
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

  getSkills(): Observable<Technology[]> {
    return this.http.get<Technology[]>('../../assets/data/skills.json');
  }
}
