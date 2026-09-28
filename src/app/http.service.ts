import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CatImage {
  id: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // aws.random.cat went offline; TheCatAPI serves up to 10 images per call without an API key
  imagesEndPoint = "https://api.thecatapi.com/v1/images/search";

  constructor(private http: HttpClient) { }

  getImage(): Observable<CatImage[]> {
    return this.http.get<CatImage[]>(this.imagesEndPoint);
  }

  getCats(limit = 10): Observable<CatImage[]> {
    return this.http.get<CatImage[]>(this.imagesEndPoint, { params: { limit } });
  }
}
