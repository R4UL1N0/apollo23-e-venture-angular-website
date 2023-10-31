import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceDone } from '../service.interface';
import { EventResponse } from 'src/app/dtos/event/event.response.dto';
import { Constants } from 'src/app/utils/constants';
import EventRequest from 'src/app/dtos/event/event.request.dto';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService implements IServiceDone {

  constructor(private readonly http: HttpClient) { }

  EVENTS_URL = `${Constants.BASE_URL}${Constants.EVENTS_ENDPOINT}`

  events: EventResponse[] = []
  private eventsSubject = new BehaviorSubject<EventResponse[]>(this.events);
  events$ = this.eventsSubject.asObservable();
  
  getAll(): void {
    this.http.get<EventResponse[]>(this.EVENTS_URL).subscribe((data) => {
      data.forEach((event) => {
        this.events.push(event)
      })
    })
  }
  getById(id: number): Object {
    throw new Error('Method not implemented.');
  }
  create(obj: EventRequest): boolean {
    this.http.post<EventResponse>(this.EVENTS_URL, obj).subscribe((event) => {
      this.events.push(event)
      return true
    })

    return false
  }
  update(id: number, obj: EventRequest): boolean {

    this.http.patch<EventResponse>(`${this.EVENTS_URL}/${id}`, obj).subscribe((event) => {
      if (!event) return false

      const index: number = this.events!.findIndex((e) => {
        e.id === event.id
      })

      this.events![index] = event

      return true
    })

    return false
  }
  
  delete(id: number): boolean {
    this.http.delete<EventResponse>(`${this.EVENTS_URL}/${id}`).subscribe((event) => {
      if (!event) return false

      const index: number = this.events!.findIndex((e) => {
        e.id === event.id
      })

      this.events!.splice(index, 1) 

      return true
    })

    return false
  }

}

