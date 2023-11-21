import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/data';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.css']
})
export class ContactButtonComponent {

  @Input() contact: Contact | undefined;

  whiteGitHub: string = "../../../assets/img/icons-tech/github-white.png";
  whiteLinkedIn: string = "../../../assets/img/icons-tech/linkedin-white.png";
  whiteCV: string = "../../../assets/img/icons-tech/white-cv-icon.png"
  blackGitHub: string = "../../../assets/img/icons-tech/github-black.png";
  blackLinkedIn: string = "../../../assets/img/icons-tech/linkedin.png";
  blackCV: string = "../../../assets/img/icons-tech/cv-icon.png";

  hoverActive = false;

  redirect() {
    if(this.contact?.url) {
      window.open(this.contact.url, '_blank');
    }
  }

  changeImg() {
    const platformName = this.contact?.name;
    if(!platformName || !this.contact) {
      return;
    }
    let icon;
    switch(platformName) {
      case "LinkedIn":
        icon = this.hoverActive ? this.whiteLinkedIn : this.blackLinkedIn;
        break;
      case "GitHub":
        icon = this.hoverActive ? this.whiteGitHub : this.blackGitHub;
        break;
      case "Resume":
        icon = this.hoverActive ? this.whiteCV : this.blackCV;
        break;

        default:
          return;
    }
    this.contact.icon = icon;
  }
}
