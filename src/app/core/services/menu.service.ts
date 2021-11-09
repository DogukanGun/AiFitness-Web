import { Injectable } from '@angular/core';
import { UserService } from 'src/app/pages/profile/user.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private authService: AuthService, private userService: UserService) { }

  getMenuItems(): MenuItem[] {

    const menus: MenuItem[] = [];
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      this.userService.getUser().subscribe(userInfo => {
        const name = userInfo.name + " " + userInfo.surname;
        menus.push(
          {
            name: "Profilim",
            url: "/profile",
            class: "btn btn-primary"
          },
          {
            name: "Çıkış Yap",
            url: "/logout",
            class: "btn btn-outline-primary"
          }

        );
        return menus;
      }, error => {
        menus.push(
          {
            name: "Çıkış Yap",
            url: "/logout",
            class: "btn btn-outline-primary"
          });
        return menus;
      });
    } else {
      menus.push(
        {
          name: 'Giriş Yap',
          url: '/login',
          class: "btn btn-outline-primary"
        },
        {
          name: 'Kayıt Ol',
          url: '/register',
          class: "btn btn-primary"
        });
    }

    return menus;
  }
}

export class MenuItem {
  url = "";
  name = "";
  class = "";
  childs?: MenuItem[] = []
}
