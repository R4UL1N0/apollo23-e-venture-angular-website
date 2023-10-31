import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceDone } from '../service.interface';
import { Constants } from 'src/app/utils/constants';
import TreasureResponse from 'src/app/dtos/treasure/treasure.response.dto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreasureService implements IServiceDone {

  TREASURES_URL = `${Constants.BASE_URL}${Constants.EVENTS_ENDPOINT}`

  treasures: TreasureResponse[] = []
  private treasuresSubject = new BehaviorSubject<TreasureResponse[]>(this.treasures);
  treasures$ = this.treasuresSubject.asObservable();
    
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
