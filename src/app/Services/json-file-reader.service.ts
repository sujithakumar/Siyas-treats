import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonFileReaderService {

  constructor(private http: HttpClient) {}

  public getJSON(FileURL : string): Observable<any> {
    return this.http.get(FileURL);
  }
}
