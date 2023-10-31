import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceDone } from '../service.interface';
import { Constants } from 'src/app/utils/constants';
import QuestionResponse from 'src/app/dtos/question/question.response.dto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService implements IServiceDone {

  QUESTIONS_URL = `${Constants.BASE_URL}${Constants.QUESTIONS_ENDPOINT}`

  questions: QuestionResponse[] = []
  private questionsSubject = new BehaviorSubject<QuestionResponse[]>(this.questions);
  questions$ = this.questionsSubject.asObservable();

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
