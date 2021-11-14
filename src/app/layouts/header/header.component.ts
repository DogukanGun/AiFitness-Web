import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { CaptionService } from 'src/app/core/services/caption.service';
import { MenuItem } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nav_component_names = ['Home','How it works','Screenshots','Developers','Download','Contact us']

  constructor(private menuService: MenuService, private captionService: CaptionService) { }
  menuItems: MenuItem[] = [];
  isCollapseLogin = true;
  isCollapseRegister = true;



  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }
  assignToggleType(name: string) {
    if (name == "Giriş Yap") {
      this.toggleLogin();
    } else if (name == "Kayıt Ol") {
      this.toggleRegister();
    } else if (name == "Profilim") {
      window.location.href = "/profile";
    } else if (name == "Çıkış Yap") {
      window.location.href = "/logout";
    } else {

    }
  }
  private toggleLogin() {
    if (this.isCollapseRegister == false) {
      this.isCollapseRegister = true;
    }
    this.isCollapseLogin = !this.isCollapseLogin;
  }
  private toggleRegister() {
    if (this.isCollapseLogin == false) {
      this.isCollapseLogin = true;
    }
    this.isCollapseRegister = !this.isCollapseRegister;
  }
  isCaptionVisible() {
    return this.captionService.getCaptionStatus();
  }
}
