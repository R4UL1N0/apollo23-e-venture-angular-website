import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-profile-page',
  templateUrl: './event-profile-page.component.html',
  styleUrls: ['./event-profile-page.component.scss']
})
export class EventProfilePageComponent {

  constructor(private readonly router: Router) {}

  public selectedSection = ''

  onBackClick() {
    const newUrl = this.router.url.replace(/\/id$/, "")
    this.router.navigateByUrl(newUrl)
  }

  goToSection(selected:string) {
    this.selectedSection = selected
  }
}
