import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/data';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.css']
})
export class ContactButtonComponent {

  @Input() contact: Contact | undefined;
}
