import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDog } from "../models/dog.model"

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  getDogs() {
    return this.http.get<IDog[]>('http://localhost:3000/dogs');
  }
}
