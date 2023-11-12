import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DirectorService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:5135/api/directors';

  GetAll() {
    return this.http.get(this.apiUrl);
  }
}
