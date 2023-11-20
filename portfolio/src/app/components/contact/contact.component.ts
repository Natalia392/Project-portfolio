import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Contact } from 'src/app/interfaces/data';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private dataService: DataService, private clipBoardService: ClipboardService) {}

  textToCopy: string = "ntorrejonvalencia@gmail.com";

  contacts: Contact[] = [];

  ngOnInit(): void {
    this.dataService.getContacts().subscribe(data => {
      console.log(data);
      this.contacts = data;
    });
  }

  handleCopyClick() {
    this.clipBoardService.copy(this.textToCopy);
    alert('Succesfully copied!');
  }

}
