import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProjects().subscribe(data => {
      console.log(data);
      this.projects = data.reverse();
    });
  }

}
