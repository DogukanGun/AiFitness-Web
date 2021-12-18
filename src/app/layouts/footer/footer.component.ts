import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer_elements = ['Home','Pricing','Privacy','Cookies','About','Contact']
  constructor() { }

  ngOnInit(): void {
  }

}
