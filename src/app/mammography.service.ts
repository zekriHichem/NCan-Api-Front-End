import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResultM} from './ResultM.model';
import {catchError, last, map, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class MammographyService {
  url = 'http://127.0.0.1:8082/';
  constructor(private http: HttpClient) { }
  getPrediction(data: FormData): Observable<any> {
    const req = new HttpRequest('POST', this.url, data, { reportProgress: true });

    return this.http.request(req);

  }
}
