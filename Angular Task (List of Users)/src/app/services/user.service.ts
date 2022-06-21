import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

const ENDPOINTS = {
  fetchAll: 'users',
  fetchOne: (id: number) => `users/${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page: number, per_page: number, id?: number): Observable<any> {
   
    let params: HttpParams = new HttpParams()
      .set('page', page)
      .set('per_page', per_page);

    if(id) 
      params = params.set('id', id);

    return this.http
      .get<any>(environment.baseURI + ENDPOINTS.fetchAll, { params })
      .pipe(
        map((response) => {
            return { ...response, data: User.fromDTOArray(response.data) };
        })
      );
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get<any>(environment.baseURI + ENDPOINTS.fetchOne(id))
      .pipe(map((response) => User.fromDTO(response.data)));
  }
}
