import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(private dataService: DataService) {}

  skills: Skill[] = [];

  ngOnInit(): void {
    this.dataService.getSkills().subscribe(data => {
      console.log(data);
      this.skills = data;
    });
  }

}
