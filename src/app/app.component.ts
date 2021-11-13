import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ["../../node_modules/bootstrap/scss/bootstrap.scss"]
})
export class AppComponent {
  title = 'mysport';

  timeout: any;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      console.log(event);
      if (event instanceof NavigationStart) {
        return;
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Hide loading indicator
        this.timeout = setTimeout(() => {
          clearTimeout(this.timeout);
        }, 500);
      }

    });
  }
}
