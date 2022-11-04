import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-router-title',
  templateUrl: './router-title.component.html',
  styleUrls: ['./router-title.component.scss']
})
export class RouterTitleComponent {

  public pathTitle: string = 'cheatsheet';

  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(event => {
      //@ts-ignore
      switch (event.url) {
        case '/cheatsheet':
          this.pathTitle = 'CHEATSHEET'
          break;
        case '/cursed':
          this.pathTitle = 'CURSED'
          break;
        case '/about':
          this.pathTitle = 'ABOUT'
          break;
        case '/ghosts':
          this.pathTitle = 'GHOST'
          break;

        default:
          break;
      }

    });
  }

}
