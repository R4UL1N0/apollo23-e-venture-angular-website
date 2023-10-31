import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private readonly router: Router) {}

  selectedRoute: string = ''

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      // if (event instanceof NavigationEnd) {
      //   this.selectedRoute = event.url.split('/')[1];
      //   console.log('Current Route:', this.selectedRoute);
      // }
    })
  }

  

  goTo(page: string) {
    this.selectedRoute = page
    this.router.navigate([`/user/${page}`])
  }

}
