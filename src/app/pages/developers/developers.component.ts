import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/constants';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  Constants = new constants();
  persons = this.Constants.PERSONS;
  developers_logos = this.Constants.DEVELOPERS_LOGOS;


  constructor() { }

  ngOnInit(): void {
  }

}


interface Person_item{
  name: string;
  surname: string;
  title: string;
  img_path: string;
  hrefs: Array<string>; // left to right links bottom of persons
};
class Person implements Person_item{
  name = "";
  surname = "";
  title = "";
  img_path = "";
  hrefs = ["","",""];
  constructor(name: string, surname: string, title: string, img_path: string, hrefs: Array<string>)
  {this.name = name;this.surname = surname;this.title = title;this.img_path = img_path;this.hrefs = hrefs;}
}
