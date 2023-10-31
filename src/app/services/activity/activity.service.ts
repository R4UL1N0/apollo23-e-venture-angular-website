import { Injectable } from '@angular/core';
import { IServiceDone } from '../service.interface';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/utils/constants';
import ActivityResponse from 'src/app/dtos/activity/activity.response.dto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService implements IServiceDone {

  ACTIVITIES_URL = `${Constants.BASE_URL}${Constants.ACTIVITIES_ENDPOINT}`

  activities: ActivityResponse[] = []
  private activitiesSubject = new BehaviorSubject<ActivityResponse[]>(this.activities);
  activities$ = this.activitiesSubject.asObservable();

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
