import { Observable } from "rxjs"

export interface IService {
    getAll(): Observable<Object[]>
    getById(id: number): Observable<Object>
    create(obj: Object): Observable<Object>
    update(id: number, obj: Object): Observable<Object>
    delete(id: number): Observable<number>
}

export interface IServiceDone {
    getAll(): void
    getById(id: number): Object
    create(obj: Object): boolean
    update(id: number, obj: Object): boolean
    delete(id: number): boolean
}