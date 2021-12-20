import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  Constants = new constants();
  copyright_name = this.Constants.COPYRIGHT_NAME;
  footer_logos = this.Constants.FOOTER_LOGOS;
  footer_menu_items = this.Constants.FOOTER_MENU_ITEMS

  footer_elements = ['Home','Pricing','Privacy','Cookies','About','Contact']
  constructor() { }

  ngOnInit(): void {
  }

}
