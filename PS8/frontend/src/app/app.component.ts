import { Component } from '@angular/core';
import {CONTACT} from './models/contactModel';
import { ContactService} from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CS591 PS8';
  contacts :any = {};

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts=> {
        this.contacts = contacts;
        console.log(`Contacts: ${this.contacts}`)
      });
  }


  displayData() {
    for (var i = 0; i < this.contacts.length; i++) {
      //console.log(this.contacts.length);
      if (document.forms["form1"]["beer"].value==this.contacts[i][0]) {
        document.getElementById('data_place').innerHTML = this.contacts[i][1];
        break;
      }
    }

    /*if (document.forms["form1"]["beer"].value==this.contacts[0][0]) {
      document.getElementById('data_place').innerHTML = this.contacts[0][1];
    }else if (document.forms["form1"]["beer"].value==this.contacts[1][0]){
      document.getElementById('data_place').innerHTML = this.contacts[1][1];
    }else if (document.forms["form1"]["beer"].value==this.contacts[2][0]){
      document.getElementById('data_place').innerHTML = this.contacts[2][1];
    }
    else{
      alert("Please input correct value!")
    }*/
  }

  constructor(private contactService: ContactService) {

  }
  ngOnInit() {
    this.getContacts();
  }
}
