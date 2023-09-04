import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private api = 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json'
  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}`)
  }
}
