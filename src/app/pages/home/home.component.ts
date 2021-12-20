import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ["../../../../node_modules/bootstrap/scss/bootstrap.scss"]
})
export class HomeComponent implements OnInit {

  Constants = new constants();
  download_android_path = this.Constants.DOWNLOAD_ANDRIOD_PATH;
  downlod_android_href = this.Constants.DOWNLOAD_ANDRIOD_HREF;
  download_ios_path = this.Constants.DOWNLOAD_IOS_PATH;
  downlod_ios_href = this.Constants.DOWNLOAD_IOS_HREF;

  main_image_path = this.Constants.MAIN_IMAGE_PATH;
  slogan = this.Constants.SLOGAN;


  constructor() { }

  ngOnInit(): void {
  }

}
