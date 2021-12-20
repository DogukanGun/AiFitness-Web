import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  Constants = new constants();
  contact_text_title = this.Constants.CONTACT_TEXT_TITLE;
  contact_text_name = this.Constants.CONTACT_TEXT_NAME;
  contact_text_email = this.Constants.CONTACT_TEXT_EMAIL;
  contact_text_number = this.Constants.CONTACT_TEXT_NUMBER;
  contact_text_des = this.Constants.CONTACT_TEXT_DES;
  contact_text_send_msg = this.Constants.CONTACT_TEXT_SEND_MSG;
  contact_text_show_logo = this.Constants.CONTACT_SHOW_LOGO;

  constructor() { }

  ngOnInit(): void {
  }

}
