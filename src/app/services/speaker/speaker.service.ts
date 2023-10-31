import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceDone } from '../service.interface';
import { Constants } from 'src/app/utils/constants';
import SpeakerResponse from 'src/app/dtos/speaker/speaker.response.dto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService implements IServiceDone {

  SPEAKERS_URL = `${Constants.BASE_URL}${Constants.SPEAKERS_ENDPOINT}`

  speakers: SpeakerResponse[] = []
  private speakersSubject = new BehaviorSubject<SpeakerResponse[]>(this.speakers);
  speakers$ = this.speakersSubject.asObservable();

  constructor(private readonly http: HttpClient) { }

  getAll(): void {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Object {
    throw new Error('Method not implemented.');
  }
  create(obj: Object): boolean {
    throw new Error('Method not implemented.');
  }
  update(id: number, obj: Object): boolean {
    throw new Error('Method not implemented.');
  }
  delete(id: number): boolean {
    throw new Error('Method not implemented.');
  }
}
