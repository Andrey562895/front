import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  getDogs() {
    return this.http.get('http://localhost:3000/dogs');
  }
}
