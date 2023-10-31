import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-unit',
  templateUrl: './event-unit.component.html',
  styleUrls: ['./event-unit.component.scss']
})
export class EventUnitComponent {

  constructor(private readonly router: Router) {}

  onEventUnitClick() {
    this.router.navigateByUrl('/user/events/id')
  }
}
