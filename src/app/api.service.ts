import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const apiCallURL = 'https://gabrielgoldstein.github.io/GGoldPersonalWebsite/json/emoji.json';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getApiCallURL() {
    return this.http.get(apiCallURL);
  }

}
