import { Component, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/data';

@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.css']
})
export class OneProjectComponent {
  @Input() project: Project | undefined;
}
