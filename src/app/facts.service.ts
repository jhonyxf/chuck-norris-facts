import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FactsService {

  constructor(private httpClient: HttpClient) { }

  getChuckNorrisFact() {
    return this.httpClient.get('https://api.chucknorris.io/jokes/random');
  }
}
