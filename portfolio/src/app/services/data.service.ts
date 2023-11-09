import { Injectable } from '@angular/core';
import { Project } from '../interfaces/data';
import projects from '../../assets/data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProjects(): Project[] {
    return projects.projects;
  }

}
