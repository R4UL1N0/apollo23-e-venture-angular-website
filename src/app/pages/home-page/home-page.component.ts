import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventResponse } from 'src/app/dtos/event/event.response.dto';
import { EventService } from 'src/app/services/event/event.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  events: EventResponse[] = []
  private eventsSubscription: Subscription;

  public icons: string[] = Constants.ICONS_LIST

  constructor(private readonly eventService: EventService) {
    this.eventsSubscription = this.eventService.events$.subscribe((events) => {
      this.events = events
    })
  }

  ngOnInit(): void {
    this.eventService.getAll()
    console.log(this.events)
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe()
  }

}
