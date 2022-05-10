import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private http: HttpClient) {}

  exampleCall() {
    console.log('here');
    return this.http.get('http://localhost:1000').pipe(take(1));
  }

  getSettings() {
    return this.http
      .get('/settings.json', { headers: { 'X-Skip-Interceptor': 'true' } })
      .pipe(take(1));
  }

  ping() {
    return this.http.get('/ping').pipe(take(1));
  }
}
