import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:5135/api/movies';

  GetAll() {
    return this.http.get(this.apiUrl);
  }
}
