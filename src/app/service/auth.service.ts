import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:5135/api/authentication';

  Registration(inputData: any) {
    return this.http.post(this.apiUrl, inputData);
  }
}
