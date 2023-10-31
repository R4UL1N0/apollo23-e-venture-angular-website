import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceDone } from '../service.interface';
import { Constants } from 'src/app/utils/constants';
import UserResponse from 'src/app/dtos/user/user.response.dto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IServiceDone {

  USERS_URL = `${Constants.BASE_URL}${Constants.USERS_ENDPOINT}`

  users: UserResponse[] = []
  private usersSubject = new BehaviorSubject<UserResponse[]>(this.users);
  users$ = this.usersSubject.asObservable();

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
